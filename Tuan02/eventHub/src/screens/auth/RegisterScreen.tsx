import { Image } from 'react-native';
import React,{useState, useEffect} from 'react';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import SocialLogin from './components/SocialLogin';
import { appColors } from '../../constants/appColors';
import { Lock, Sms } from 'iconsax-react-native';
import { Validate } from '../../utils/validate';


const RegisterScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {
    const emailValidation = Validate.email(email);

    if(!email || !password || !emailValidation || repassword !== password){
      setIsDisable(true);
    }
    else{
      setIsDisable(false);
    }
  },[email, password, repassword]);
  return (
    <ContainerComponent isImageBackground isScroll>
      <SectionComponent
        styles={{
          justifyContent: 'center',
          alignItems:'center',
          marginTop: 75,
        }}>
          <Image
            source={require('../../assets/img/logo.png')}
            style={{
              width:162,
              height:114,
              marginBottom:30,
            }}
          />
        </SectionComponent>
        <SectionComponent>
          <TextComponent size={24} title text="Register"/>
          <SpaceComponent height={21}/>
          <InputComponent
              value={email}
              placeholder="Email"
              onChange={val => setEmail(val)}
              allowClear
              affix={<Sms size={22} color={appColors.gray}/>}
          />
          <InputComponent
            value={password}
            placeholder="Password"
            onChange={val => setpassword(val)}
            isPassword
            allowClear
            affix={<Lock size={22} color={appColors.gray}/>}
          />
          <InputComponent
            value={repassword}
            placeholder="Repeat Password"
            onChange={val => setRepassword(val)}
            isPassword
            allowClear
            affix={<Lock size={22} color={appColors.gray}/>}
          />
        </SectionComponent>
        <SpaceComponent height={16}/>
        <SectionComponent>
          <ButtonComponent
            disable={isDisable}
            //onPress={handelLogin}
            text="Register"
            type="primary"
          />
        </SectionComponent>
        <SocialLogin/>
        <SectionComponent>
          <RowComponent justify="center">
            <TextComponent text="Already have an account? "/>
            <ButtonComponent
              type="link"
              text="Sign in"
              onPress={() => navigation.navigate('LoginScreen')}
            />
          </RowComponent>
        </SectionComponent>
    </ContainerComponent>
  );
};

export default RegisterScreen;