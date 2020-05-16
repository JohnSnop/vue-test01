<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 850px;margin: auto">
            <el-table-column
                    fixed
                    prop="id"
                    label="编号"
                    width="250">
            </el-table-column>
            <el-table-column
                    prop="serial"
                    label="描述"
                    width="300">
            </el-table-column>
            <el-table-column

                    label="操作"
                    width="300">
                <template slot-scope="scope">
                    <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
                    <el-button @click="deleteById(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination style="width: 60%;margin: auto"
                background
                layout="prev, pager, next"
                :page-size="5"
                :total="total" @current-change="page">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        methods: {
            edit(row) {
                this.$router.push({
                    path: '/update',
                    query: {
                        id: row.id
                    }
                })
            },
            deleteById(row) {
                axios.delete('http://localhost:8181/payment/deleteById/'+row.id).then(resp => {
                    this.$alert('这是一段内容', 'OK', {
                        confirmButtonText: '确定',
                        callback: action => {
                            window.location.reload()
                        }
                    });
                })
            },
            page(currentPage) {
                // alert(currentPage)
                axios.get('http://localhost:8181/payment/findByPage/'+ currentPage +'/5').then(resp => {
                    this.tableData = resp.data.data.content
                    this.total = resp.data.data.totalElements
                })
            }
        },
        created() {
            axios.get('http://localhost:8181/payment/findByPage/1/5').then(resp => {
                console.log(resp)
                this.tableData = resp.data.data.content
                this.total = resp.data.data.totalElements
            })
        },
        data() {
            return {
                total: null,
                tableData: [{
                    id: '1',
                    name: '王小虎',
                    author: '上海'
                }, {
                    id: '2',
                    name: '王小虎',
                    author: '上海'
                }, {
                    id: '3',
                    name: '王小虎',
                    author: '上海'
                }, {
                    id: '4',
                    name: '王小虎',
                    author: '上海'
                }]
            }
        }
    }
</script>