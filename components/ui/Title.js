import { Text,StyleSheet ,Platform} from "react-native"

export default function Title({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title:{
        fontFamily:"open-sans-bold",
        fontSize:18,
        // fontWeight:'bold',
        color:"white",
        textAlign:'center',
        // borderWidth:Platform.OS === 'android' ? 2 : 0,
        borderWidth:Platform.select({ios:0,android:2}),
        borderColor:"white",
        maxWidth:"80%",
        width:300,
        padding:12,
    }
})