import React from 'react';
import styles from './updateprofileform.module.css';
import { reduxForm, Field } from 'redux-form';
import { UpdateProfileInput, UpdateProfileTextarea, UpdateProfileCheckbox }
  from '../../../../forms/UpdateProfileFields/UpdateProfileFields';
import { required } from '../../../../forms/validation';
import ContactsInfo from './ContactsInfo/ContactsInfo';
import ButtonLoading from '../../../common/ButtonLoading/ButtonLoading';

const nameIsRequired = required('Enter your name!');
const fieldIsRequired = required('This information is required!')

const SaveButton = (props) => {
  return (
    <button
      className={styles.save}
      onClick={props.onClick}
      disabled={props.isUpdating}
    >
      {props.isUpdating
        ? <ButtonLoading backgroundColor="#333" />
        : 'Save'
      }
    </button>
  )
}

const UpdateProfile = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={UpdateProfileInput}
        name="fullName"
        inputName="Name:"
        id="fullName"
        type="text"
        validate={[nameIsRequired]}
      />
      <Field
        maxLength="200"
        component={UpdateProfileTextarea}
        name="aboutMe"
        areaName="About me:"
        validate={[fieldIsRequired]}
      />
      <Field
        maxLength="200"
        component={UpdateProfileTextarea}
        name="lookingForAJobDescription"
        areaName="Professional skills:"
        validate={[fieldIsRequired]}
      />
      <Field
        checked={props.userInfo.lookingForAJob}
        component={UpdateProfileCheckbox}
        name="lookingForAJob"
        id="lookingForAJob"
        label="Looking for a job:"
      />
      <SaveButton onClick={props.onClick} isUpdating={props.isUpdating}/>
      <ContactsInfo contacts={props.userInfo.contacts} />
      <SaveButton onClick={props.onClick} isUpdating={props.isUpdating} />
    </form>
  )
}

const UpdateProfileForm = reduxForm({ form: 'updateProfile' })(UpdateProfile); 

export default UpdateProfileForm;