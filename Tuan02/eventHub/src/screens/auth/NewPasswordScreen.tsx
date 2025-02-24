import { Image } from 'react-native';
import React,{useState, useEffect} from 'react';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';

import { appColors } from '../../constants/appColors';
import { Lock } from 'iconsax-react-native';


const NewPasswordScreen = ({navigation}:any) => {
  const [repassword, setRepassword] = useState('');
  const [password, setpassword] = useState('');
  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {

    if(!repassword || !password || password !== repassword){
      setIsDisable(true);
    }
    else{
      setIsDisable(false);
    }
  },[repassword, password]);
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
          <TextComponent size={24} title text="Enter New Password"/>
          <SpaceComponent height={21}/>
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
            onPress={() => navigation.navigate('LoginScreen')}
            text="Submit"
            type="primary"
          />
        </SectionComponent>
    </ContainerComponent>
  );
};

export default NewPasswordScreen;