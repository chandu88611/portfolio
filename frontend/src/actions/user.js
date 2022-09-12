import axios from "axios";




export const contactUs = (name, email, message) => async (dispatch) => {
    try {
      dispatch({
        type: "CONTACT_US_REQUEST",
      });
  
      const { data } = await axios.post(
        "/api/v1/contact",
        { name, email, message },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      dispatch({
        type: "CONTACT_US_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "CONTACT_US_FAILURE",
        payload: error.response.data.message,
      });
    }
  };