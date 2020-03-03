import Axios from "axios";

const state = {
    employees:[
      
    ]
}
const mutations = {
    storeEmployees(state,data){
        state.employees =data;
    },
    storeEmployee(state,data){
        state.employees.push(data)
    },
    removeEmployee(state,id){
     var index=   state.employees.findIndex(e=>e.id==id);
     state.employees.splice(index,1);
    }
}

const actions={
    getEmployees({commit}){
        Axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            commit("storeEmployees",res.data)
        })
    },
    getEmployee({commit},id){
        Axios.get("https://jsonplaceholder.typicode.com/users"+id).then((res)=>{
            commit("setEmployee",res.data)
        })
    },
    createEmployee({commit},data){
        Axios.post("",data).then((res)=>{
             commit("storeEmployee",res.data)
        })
    },
    deleteEmployee({commit},id){
        Axios.delete(""+id).then(()=>{
            commit("removeEmployee");
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