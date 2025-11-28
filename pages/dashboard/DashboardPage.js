import { View, Text, TextInput, Button, Pressable, TouchableOpacity } from "react-native";
import styles from "../../styles/styles";
import NavBar from "../componentsFolder/NavBar";
import { use, useEffect } from "react";
import axios from "axios";

export default function DashboardPage({navigation}) {
    // sample user role logic
    const role = localStorage.getItem("role") 
    console.log("Role in Dashboard:", role);
    let text = ""
    if (role !== "student") {
        text = "Admin Dashboard"
    }else{
        text = "Student Dashboard"
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/list_Events/');
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error); 
            }
            
        }
        fetchData();
    },[])
  return (
    <View>
        
        <NavBar text={text}/>
        
        {role === "admin" ? 
        
        <View>
            <View>
            <Text style={{ fontSize: 20, margin: 16 }}>Welcome Admin</Text>
        </View>
            <Pressable onPress={() => navigation.navigate("Register")}>
                <View style={styles.card} >
                    <Text style={{ fontSize: 18, marginBottom: 12 }}>
                        Ongoing Form Approvals
                    </Text>
                </View>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Register")}>
                <View style={styles.card} >
                    <Text style={{ fontSize: 18, marginBottom: 12 }}>
                        Pending Approvals
                    </Text>
                </View>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Register")}>
                <View style={styles.card} >
                    <Text style={{ fontSize: 18, marginBottom: 12 }}>
                        Completed
                    </Text>
                </View>
            </Pressable>
        </View>
         : 
         <View>
            <View>
            <Text style={{ fontSize: 20, margin: 16 }}>Welcome Student</Text>
        </View>
            <Pressable onPress={() => navigation.navigate("Register")}>
                <View style={styles.card} >
                    <Text style={{ fontSize: 18, marginBottom: 12 }}>
                        Add Activity
                    </Text>
                </View>
            </Pressable>
            <View>
                <Text style={{ fontSize: 20, margin: 16 }}>Submitted Forms</Text>
                <Pressable onPress={() => navigation.navigate("Register")}>
                <View style={styles.card} >
                    <Text style={{ fontSize: 18, marginBottom: 12 }}>
                        Activity1
                    </Text>
                </View>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Register")}>
                <View style={styles.card} >
                    <Text style={{ fontSize: 18, marginBottom: 12 }}>
                        Activity2
                    </Text>
                </View>
            </Pressable>
            </View>
        </View>
          }
        
        

    </View>
  );
}