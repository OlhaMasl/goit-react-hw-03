import { Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";

const ContactForm = ({onAdd}) => {
    return (
        <div>
            <Formik initialValues={{}} onSubmit={() => {}}>
                <Form>
                    <lebel>
                        <span>Name</span>
                        <Field name="name"></Field>
                    </lebel>
                    <lebel>
                        <span>Number</span>
                        <Field name="name"></Field>
                    </lebel>
                </Form>
            </Formik>
        </div>

    );
};
 
export default ContactForm;