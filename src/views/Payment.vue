<template>
    <div>
        <table>
            <tr>
                <td>编号</td>
                <td>描述</td>
            </tr>
            <tr v-for="item in books">
                <td>{{item.id}}</td>
                <td>{{item.serial}}</td>
            </tr>
        </table>
        {{msg}}
    </div>
</template>

<script>
    export default {
        name: "Payment",
        data() {
            return {
                msg: "Hello Vue",
                books: [
                    {
                        id: 1,
                        serial: "Hello-SpringCloud"
                    },
                    {
                        id: 1,
                        serial:  "consumerAAA-SpringCloud2020"
                    }
                ]
            }
        },
        created() {
            /*const _this = this;
            axios.get("http://localhost:8181/payment/findAll").then(function (resp) {
                console.log(resp)
                _this.books = resp.data.data
            })*/
            axios.get("http://localhost:8181/payment/findAll").then(resp => {
                console.log(resp)
                this.books = resp.data.data
            })
        }
    }
</script>

<style scoped>

</style>