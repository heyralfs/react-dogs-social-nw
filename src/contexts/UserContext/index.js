import React, { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "../../api";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [isLogged, setIsLogged] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setIsLogged(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      console.log(url, options);
      const response = await fetch(url, options);
      console.log(response);

      if (!response.ok) throw new Error(`Error: Usuário inválido`);

      const { token } = await response.json();
      window.localStorage.setItem("token", token);
      await getUser(token);

      navigate("/conta");
    } catch (err) {
      setError(err.message);
      setIsLogged(false);
    } finally {
      setLoading(false);
    }
  }

  const userLogout = useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setIsLogged(false);
      window.localStorage.removeItem("token");
      navigate("/login");
    },
    [navigate]
  );

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          // limpa possíveis erros anteriores
          setError(null);

          setLoading(true);

          // importa url e options de validação de token
          const { url, options } = TOKEN_VALIDATE_POST(token);
          // faz o fetch da validação do token
          const response = await fetch(url, options);
          // se response não for ok, define o erro
          if (!response.ok) throw new Error("Token inválido");
          // caso contrário, busca o usuário correspondente ao token
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setIsLogged(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userLogout,
        data,
        error,
        loading,
        isLogged,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
