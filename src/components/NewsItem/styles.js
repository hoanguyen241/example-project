import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#DFDFDF",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: 'white', 
        paddingTop:0
    },
    night: {
        flex: 1,
        backgroundColor: 'black', 
        paddingTop:0
    },
    item:{
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 3,
        marginBottom: 20,
        paddingBottom: 20,
        paddingHorizontal: 20
    },
    title:{
        color: 'black',
        marginVertical: 10,
        fontWeight: 'bold'
    },
    titleNight:{
        color: 'white',
        marginVertical: 10,
        fontWeight: 'bold'
    },
    imgStyle:{
        width: 200,
        height: 200,
        marginBottom: 10
    },
    description:{
        color: 'black'
    },
    descriptionNight:{
        color: 'white'
    }
})