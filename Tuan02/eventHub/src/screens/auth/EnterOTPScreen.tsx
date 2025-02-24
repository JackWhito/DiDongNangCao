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
import { appColors } from '../../constants/appColors';
import { Sms } from 'iconsax-react-native';

const EnterOTPScreen = ({navigation}:any) => {
  const [otp, setOtp] = useState('');
  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {

    if(!otp){
      setIsDisable(true);
    }
    else{
      setIsDisable(false);
    }
  },[otp]);
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
          <TextComponent size={24} title text="Enter Validation Code"/>
          <SpaceComponent height={21}/>
          <InputComponent
              value={otp}
              placeholder='Validation'
              onChange={val => setOtp(val)}
              allowClear
              affix={<Sms size={22} color={appColors.gray}/>}
          />
          <RowComponent justify="center">
            <TextComponent text="If you dont receive a code! "/>
            <ButtonComponent
              type="link"
              text="Resend"
            />
          </RowComponent>
        </SectionComponent>
        <SpaceComponent height={16}/>
        <SectionComponent>
          <ButtonComponent
            disable={isDisable}
            onPress={() => navigation.navigate('NewPasswordScreen')}
            text="Verify"
            type="primary"
          />
        </SectionComponent>
    </ContainerComponent>
  );
};

export default EnterOTPScreen;