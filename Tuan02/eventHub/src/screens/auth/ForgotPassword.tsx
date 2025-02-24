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
import { Sms } from 'iconsax-react-native';
import { Validate } from '../../utils/validate';


const ForgotPassword = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {
    const emailValidation = Validate.email(email);

    if(!email || !emailValidation){
      setIsDisable(true);
    }
    else{
      setIsDisable(false);
    }
  },[email]);
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
          <TextComponent size={24} title text="Enter Email"/>
          <SpaceComponent height={21}/>
          <InputComponent
              value={email}
              placeholder='Email'
              onChange={val => setEmail(val)}
              allowClear
              affix={<Sms size={22} color={appColors.gray}/>}
          />
        </SectionComponent>
        <SpaceComponent height={16}/>
        <SectionComponent>
          <ButtonComponent
            disable={isDisable}
            onPress={() => navigation.navigate('EnterOTPScreen')}
            text="Send OTP"
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

export default ForgotPassword;