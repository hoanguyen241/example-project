import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    img1:{
        width: 200,
        height: 200,
        tintColor: 'gray'
    },
    imgCancel:{
        width: 60,
        height: 60,
        tintColor: 'red'
    },
    imgCall:{
        width: 35,
        height: 35,
        tintColor: 'green'
    },
    viewName:{
        alignItems: 'center'
    },
    txtName:{
        //marginVertical: 30
        color: 'white',
        fontSize: 25
    },
    txtToCall:{
        //marginVertical: 30
        color: 'white'
    },
    btns:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: width/1
    },
    btnCancel:{
        // borderRadius: 50,
        // borderColor: 'red',
        // borderWidth: 1,
        // // width: 60,
        // // height: 60,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    btnOk:{
        borderRadius: 50,
        borderColor: 'green',
        borderWidth: 1,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    }
})