import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4B4B4D'
    },
    img1:{
        width: 150,
        height: 150,
        borderRadius: 75
    },
    imgCancel:{
        width: 50,
        height: 50,
        tintColor: 'white'
    },
    btnCancel2:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: 'white',
        borderWidth: 0.5
    },
    imgCancel2:{
        width: 20,
        height: 20,
        tintColor: 'white'
    },
    imgCall:{
        width: 35,
        height: 35,
        tintColor: 'green'
    },
    imgUser:{
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewName:{
        margin: 20
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btns2:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        width: width/1.5
    },
    btnCancel:{
        borderRadius: 50,
        borderColor: 'red',
        borderWidth: 1,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    btnOk:{
        borderRadius: 50,
        borderColor: 'green',
        borderWidth: 1,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundVideo:{
        width: width,
        height: 250
    }
})