import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import Cookies from 'js-cookie';

//Services
import api from '../../services/api';

//Components
import Header from '../../components/Header'
import Input from '../../components/Input';
import Button from '../../components/Button';
import FeedbackMessage from '../../components/FeedbackMessage';

//Styles
import { 
    Whapper,
    Container, 
    Content,
    TitleContainer,
    Title,
} from './styles';

//Interfaces
import { FullAddressInterface } from './interfaces';

const Register = () => {
    const [cep, setCep] = useState("");
    const [fullAddress, setFullAddress] = useState<FullAddressInterface>({
        bairro: "",
        cep: "",
        complemento: "",
        ddd: "",
        gia: "",
        ibge: "",
        localidade: "",
        logradouro: "",
        siafi: "",
        uf: ""
    });

    const [message, setMessage] = useState({
        showMessage: false,
        messageText: "",
        error: false
    });

    useEffect(() => {
        const searchCepDataAtApi = async () => {
            const cepWithoutDash = cep.replace('-', '').replaceAll('_', '');

            const { data } = await api.get(`${cepWithoutDash}/json`);

            setFullAddress(data);
        }

        if(cep.replaceAll('_', '').length === 9){
            searchCepDataAtApi();
        }
    }, [cep]);


    const validationWithYup = Yup.object().shape({
        name: Yup.string().required(),
        birthDate: Yup.string().required(),
        document: Yup.string().required(),
        cep: Yup.string().required(),
        state: Yup.string().required(),
        city: Yup.string().required(),
        address: Yup.string().required(),
        addressNumber: Yup.string(),
        complement: Yup.string()
    });

    return(
        <Whapper id="register-container">
            <Container>
                <Header/>

                <Content>
                    <Formik
                        initialValues={{
                            name: "",
                            birthDate: "",
                            document: "",
                            cep: "",
                            state: "",
                            city: "",
                            neighborhood: "",
                            address: "",
                            addressNumber: "",
                            complement: ""
                        }}
                        validationSchema={validationWithYup}
                        onSubmit={(values) => {
                            try {
                                localStorage.setItem("register", JSON.stringify(values));

                                Cookies.set("register", values);

                                setMessage({
                                    error: false,
                                    messageText: "Registrado com sucesso",
                                    showMessage: true
                                });
                            } catch (e) {
                                setMessage({
                                    showMessage: true,
                                    messageText: "Erro ao cadastrar, tente novamente",
                                    error: true
                                })
                            }
                        }}
                    >
                        {({values, errors, handleChange}) => {
                            values.state = fullAddress.uf;
                            values.city = fullAddress.localidade;
                            values.neighborhood = fullAddress.bairro;
                            values.address = fullAddress.logradouro;
                            values.complement = fullAddress.complemento;
                            return(
                                <Form className="register-form">
                                    <TitleContainer>
                                        <Title>Dados cadastrais</Title>
                                    </TitleContainer>
                                    
                                    <Field id="name" name="name" className="input-custom" placeholder="Nome Completo" as={Input}/>
                                
                                
                                    <InputMask id="birthDate" name="birthDate" onChange={handleChange} className="input-custom" placeholder="Data de nascimento" mask="99/99/9999">
                                        {(inputProps: any) => <Field {...inputProps} as={Input}/>}
                                    </InputMask>
                                    
                                
                                
                                    <InputMask id="document" name="document" className="input-custom" placeholder="CPF" onChange={handleChange} mask="999.999.999-99" maskPlaceholder={null}>
                                        {(inputProps: any) => <Field {...inputProps} as={Input}/>}
                                    </InputMask>
                                
                                
                                    <InputMask 
                                        id="cep" 
                                        name="cep" 
                                        className="input-custom" 
                                        placeholder="CEP" 
                                        onChange={(e) => {
                                            handleChange(e);
                                            setCep(e.target.value);
                                        }} 
                                        mask="99999-999" 
                                    >
                                        {(inputProps: any) => <Field {...inputProps} as={Input}/>}
                                    </InputMask>
                                    
                                
                                
                                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                        <div style={{width: '25%'}}>
                                            <Field id="state" name="state" className="input-custom" placeholder="UF" disabled as={Input}/>
                                        </div>
                                        <div style={{width: '65%'}}>
                                            <Field id="city" name="city" className="input-custom" placeholder="Cidade" disabled as={Input}/>
                                        </div>
                                    </div>
                                
                                
                                    <Field id="neighborhood" name="neighborhood" className="input-custom" placeholder="Bairro" disabled as={Input}/>
                                
                                
                                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                        <div style={{width: '65%'}}>
                                            <Field id="address" name="address" className="input-custom" placeholder="Endereço" disabled as={Input}/>
                                        </div>
                                        <div style={{width: '25%'}}>
                                            <Field id="addressNumber" name="addressNumber" className="input-custom" placeholder="Número" as={Input}/>
                                        </div>
                                    </div>
                                
                                
                                    <Field id="complement" name="complement" className="input-custom" placeholder="Complemento" as={Input}/>
                                
                                    {
                                        message.showMessage && (
                                            <FeedbackMessage color={ message.error ? "red" : "#BADC58" }>
                                                { message.messageText }
                                            </FeedbackMessage>
                                        )
                                    }
                                    
                                    <Button
                                        width={'100%'}
                                        height={'3rem'}
                                        type="submit"
                                        style={{marginBottom: '3rem'}}
                                        onClick={() => {
                                            if(errors !== {}){
                                                setMessage({
                                                    showMessage: true,
                                                    messageText: "Um ou mais campos não foram preenchidos",
                                                    error: true
                                                })
                                            }
                                        }}
                                    >
                                        Registrar-se
                                    </Button>
                                
                                </Form>
                            )
                        }}
                    </Formik>
                </Content>
            </Container>
        </Whapper>
    )
}

export default Register;