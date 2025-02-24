import React from 'react';
import { Facebook, Google } from '../../../assets/svg';
import { ButtonComponent, SectionComponent, SpaceComponent, TextComponent } from '../../../components';
import { appColors } from '../../../constants/appColors';
import { fontFamilies } from '../../../constants/fontFamilies';

const SocialLogin = () => {
  return (
    <SectionComponent>
        <TextComponent
            styles={{textAlign:'center'}}
            text="OR"
            color={appColors.gray4}
            size={16}
            font={fontFamilies.medium}
        />
        <SpaceComponent height={16}/>

        <ButtonComponent
            type="primary"
            //onPress = {handleLoginWithGoogle}
            color={appColors.white}
            textColor={appColors.text}
            text="Login with Google"
            textFont={fontFamilies.regular}
            iconFlex="left"
            icon={<Google width={24} height={24}/>}
        />

        <ButtonComponent
            type="primary"
            //onPress = {handleLoginWithFacebook}
            color={appColors.white}
            textColor={appColors.text}
            text="Login with Facebook"
            textFont={fontFamilies.regular}
            iconFlex="left"
            icon={<Facebook width={24} height={24}/>}
        />
        {/* <LoadingModal visible={isloading} */}
    </SectionComponent>
  );
};

export default SocialLogin;