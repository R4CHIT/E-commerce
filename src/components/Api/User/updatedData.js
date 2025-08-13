import SecureFetch from "../Auth/apiConfiguration";

const updateduserData = async (updatedData) => {
  try {
    const request = await SecureFetch(
      "http://localhost:3000/auth/user",
      "PATCH",
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      updatedData
    );    
    const response = await request.json();

    if (request.ok) {
        localStorage.setItem('userDetails',JSON.stringify(response.user))
    } else {
      console.error("Update failed:", response);
    }
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

export default updateduserData;
