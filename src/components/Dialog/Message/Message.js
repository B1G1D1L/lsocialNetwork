import { Form, Formik, Field, ErrorMessage } from 'formik';

import s from './../Dialog.module.css';


const Message = ({ dialogPage, addMessage }) => {

  // Массив сообщений
  let messageElement = dialogPage.map(m => 
      <p key ={dialogPage.indexOf(m)}>{m.message}</p>
    );

  return (
    <div className={s.message}>
      <div className={s.dialog}>
        {messageElement}
      </div>
      <div className={s.messageInput}>
        <MessageForm />
      </div>
    </div>
  );
}






// Formik
const MessageForm = (props) => (
  <div>
    <h2>Message Formik</h2>
    <Formik
      initialValues={{message: ''}}

      validate={ values => {
        const error = {}
        if(!values.message) {
          error.message = 'Required'  
        } else if(values.message.length < 5) {
          error.message = 'Минимальное количество букв 5'
        }
        return error
      }}

      onSubmit={(values, {setSubmitting}) => {
        console.log(values.message);
        setSubmitting(false);
      }}
    >
      {({
        values, errors, touched, isSubmitting,
        handleChange, handleBlur, handleSubmit
        }) => (
           <Form onSubmit={handleSubmit}>
            <Field type='text' name='message' placeholder='messge' component='textarea' />
            <ErrorMessage name='message' component='div' />
            {handleBlur && errors.message}

             <button type='submit' disabled={isSubmitting}>Send</button>
           </Form>  
         )}
    </Formik>
  </div>
)


export default Message;










// // Form
// function LoginForm(props): JSX.Element {
//   const { handleSubmit } = props;
//   const Textarea = ElementHOC('textarea');

//   return <div>
//     <form onSubmit={handleSubmit}>
//       <Field
//         component={Textarea}
//         type='text'
//         name='message'
//         validate={[maxLength15]}
//         placeholder='input new message' />
//       <button type='submit'>Submit</button>
//     </form>
//   </div>;
// }

// const LoginReduxForm = reduxForm<IMessage>({
//   form: 'message',
// })(LoginForm);


// export default Message;


// // Types
// type MessageProps = {
//   dialogPage: Array<MessageDataType>
//   addMessage: (newMessage: string) => void
// } //Message


// type ReduxForm = InjectedFormProps<IMessage> // Redux-form
// type IMessage = {
//   message: string
// } 