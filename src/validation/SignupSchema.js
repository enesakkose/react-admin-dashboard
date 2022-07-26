import Yup from "./validate";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const SignupSchema = Yup.object().shape({
    username: Yup.mixed()
        .required()
        .test({
            message: 'Please enter a valid username',
            test: str => /^[a-z0-9\.\_]+$/i.test(str)
        })
    ,
    password: Yup.string().required(),
    telOrMail: Yup.string().when("isEmail", {
        is: '1',
        then: Yup.string()
            .email("Please enter valid email")
            .required("email cannot be empty"),
        otherwise: Yup.string()
            .required("phonenumber cannot be empty")
            .min(6, 'phonenumber must be at least 6 char'),
    }),
    fullName: Yup.string().required()
})