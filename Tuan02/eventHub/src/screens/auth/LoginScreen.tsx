import { Image, Switch } from 'react-native';
import React,{useState} from 'react';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import { appColors } from '../../constants/appColors';
import { Lock, Sms } from 'iconsax-react-native';


const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [isRemember, setIsRemember] = useState(true);
  const [isDisable,] = useState(true);
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
          <TextComponent size={24} title text="Sign In"/>
          <SpaceComponent height={21}/>
          <InputComponent
              value={email}
              placeholder='Email'
              onChange={val => setEmail(val)}
              allowClear
              affix={<Sms size={22} color={appColors.gray}/>}
          />
          <InputComponent
            value={password}
            placeholder='Password'
            onChange={val => setpassword(val)}
            isPassword
            allowClear
            affix={<Lock size={22} color={appColors.gray}/>}
          />
          <RowComponent justify="space-between">
            <RowComponent onPress={() => setIsRemember(!isRemember)}>
              <Switch
                trackColor={{true: appColors.primary}}
                thumbColor={appColors.white}
                value={isRemember}
                onChange={() => setIsRemember(!isRemember)}
              />
              <SpaceComponent width={4}/>
              <TextComponent text="Remember me"/>
            </RowComponent>
            <ButtonComponent
              text="Forgot Password?"
              onPress={() => navigation.navigate('Forgot Password')}
              type="text"
            />
          </RowComponent>
        </SectionComponent>
        <SpaceComponent height={16}/>
        <SectionComponent>
          <ButtonComponent
            disable={isDisable}
            //onPress={handelLogin}
            text="Sign In"
            type="primary"
          />
        </SectionComponent>
        {/* <SocialLogin/> */}
        <SectionComponent>
          <RowComponent justify="center">
            <TextComponent text="Dont have an account?"/>
            <ButtonComponent
              type="link"
              text="Sign Up"
              onPress={() => navigation.navigate('SignUpScreen')}
            />
          </RowComponent>
        </SectionComponent>
    </ContainerComponent>
  );
};

export default LoginScreen;