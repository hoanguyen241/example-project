import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import { connect } from 'react-redux';
import { getNews, changeMode } from '../../store/demo/actions';
import styles from './styles';
import { Switch } from 'react-native-switch';
import CustomSwitch from '../CustomSwitch/index';

let SwitchComponent = ({article, mode, changeMode})=>(
    <View style={styles.switch}>
        <Switch
            value={mode}
            onValueChange={(val) => changeMode(val)}
            disabled={false}
            activeText={'On'}
            inActiveText={'Off'}
            circleSize={30}
            barHeight={20}
            circleBorderWidth={0}
            backgroundActive={'green'}
            backgroundInactive={'gray'}
            circleActiveColor={'white'}
            circleInActiveColor={'white'}
            //changeValueImmediately={true}
            renderInsideCircle={() => <CustomSwitch />} // custom component to render inside the Switch circle (Text, Image, etc.)
            changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
            innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
            outerCircleStyle={{}} // style for outer animated circle
            renderActiveText={false}
            renderInActiveText={false}
            switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
            switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
            switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
        />
    </View>
)

const mapStateToProps = (state) => ({
    article: state.demoReducer.news,
    mode: state.demoReducer.newMode,
})

const mapDispatchToProps = {
    changeMode: changeMode,
};

SwitchComponent = connect(mapStateToProps, mapDispatchToProps)(SwitchComponent);

export default SwitchComponent;