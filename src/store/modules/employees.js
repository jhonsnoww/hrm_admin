import Axios from "axios";

const state = {
    employees:[
        // {id:1,name:"Su Su",email:"susu@gmail.com"},
        // {id:2,name:"Mg Mg",email:"mgmg@gmail.com"},
        // {id:3,name:"Ma Ma",email:"mama@gmail.com"}
    ]
}
const mutations = {
    storeEmployees(state,data){
        state.employees =data;
    },
    storeEmployee(state,data){
        state.employees.push(data)
    }
}

const actions={
    getEmployees({commit}){
        Axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            commit("storeEmployees",res.data)
        })
    },
    createEmployee({commit},data){
        Axios.post("",data).then((res)=>{
             commit("storeEmployee",res.data)
        })
    }
}

const getters = {
        employees(state){
        return state.employees;
        }
}

export default {
    state,
    mutations,
    actions,
    getters
}