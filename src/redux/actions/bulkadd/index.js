import * as types from "../../types";
import axios from "axios";
import { Client } from "../../../services/client";
import { searchContact } from "../getcontacts";

export const bulkAdd =
  (formData, cb, handleErrors) => async (dispatch, getState) => {
    try {
      dispatch({ type: types.ACTION_START });

      try {
        const res = await axios.post(
          "http://localhost:5000/api/uploadBulkContacts",
          // "https://aqueous-cliffs-92016.herokuapp.com/api/uploadBulkContacts",
          formData
        );
        cb();
        dispatch(searchContact(""));
      } catch (ex) {
        handleErrors("error uploading contacts");
        console.log(ex.message);
      }

      dispatch({ type: types.ACTION_SUCCESS });
      dispatch({
        type: types.ADD_CONTACT_SUCCESS,
        payload: "Contacts added successfully",
      });
    } catch (e) {
      const { message } = e.response.data;
      dispatch({ type: types.ACTION_FAILED, message });
    }
  };
export const bulkUpdate =
  (formData, cb, handleErrors) => async (dispatch, getState) => {
    try {
      dispatch({ type: types.ACTION_START });

      try {
        const res = await axios.post(
          "http://localhost:5000/api/updateBulkContacts",
          // "https://aqueous-cliffs-92016.herokuapp.com/api/updateBulkContacts",
          formData
        );
        cb();
        dispatch(searchContact(""));
      } catch (ex) {
        handleErrors("error updating contacts");
        console.log(ex);
      }

      dispatch({ type: types.ACTION_SUCCESS });
      dispatch({
        type: types.UPDATE_CONTACT_SUCCESS,
        payload: "Contacts updated successfully",
      });
    } catch (e) {
      const { message } = e.response.data;
      dispatch({ type: types.ACTION_FAILED, message });
    }
  };
export const bulkDelete =
  (formData, cb, handleErrors) => async (dispatch, getState) => {
    try {
      dispatch({ type: types.ACTION_START });
      try {
        const res = await axios.post(
          "http://localhost:5000/api/deleteBulkContacts",
          // "https://aqueous-cliffs-92016.herokuapp.com/api/deleteBulkContacts",
          formData
        );
        cb();
        dispatch(searchContact(""));
      } catch (ex) {
        handleErrors("error deleting contacts");
        console.log(ex);
      }

      dispatch({ type: types.ACTION_SUCCESS });
      dispatch({
        type: types.DELETE_CONTACTS_SUCCESS,
        payload: "Contacts deleted successfully",
      });
    } catch (e) {
      const { message } = e.response.data;
      dispatch({ type: types.ACTION_FAILED, message });
    }
  };
