import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        padding: 20,
        backgroundColor: '#DFDFDF',
    },
    functionItem:{
        width: width/2-50,
        height: width/2-90,
        marginHorizontal: 5,
        marginBottom: 10
    },
    imgBg:{
        width: '100%', 
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    txtItem:{
        fontSize: 14,
        backgroundColor: 'green',
        paddingVertical: 2.5,
        paddingHorizontal: 5,
    }
})