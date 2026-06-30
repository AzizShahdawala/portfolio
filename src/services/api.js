const API =
  process.env.REACT_APP_API_URL;

export const sendContact = async (data) => {
  const response = await fetch(`${API}/contact`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  return response.json();
};