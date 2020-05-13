<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="id"
                    label="编号"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="serial"
                    label="描述"
                    width="300">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
                background
                layout="prev, pager, next"
                page-size="5"
                :total="total" @current-change="page">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        methods: {
            handleClick(row) {
                console.log(row);
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