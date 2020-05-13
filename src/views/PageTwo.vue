<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"
        style="width: 60%">
        <el-form-item label="简介描述" prop="serial">
            <el-input v-model="ruleForm.serial"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <!--<el-button @click="test">test</el-button>-->
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    serial: ''
                },
                rules: {
                    serial: [
                        { required: true, message: '请输入简介描述', trigger: 'blur' },
                        { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            test() {
                console.log(this.ruleForm)
            },
            submitForm(formName) {
                // const _this = this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post('http://localhost:8181/payment/save', this.ruleForm).then(resp => {
                            console.log(resp)
                            this.$alert('这是一段内容', 'OK', {
                                confirmButtonText: '确定',
                                callback: action => {
                                    this.$router.push('/pageOne')
                                }
                            });
                            // this.$message('添加成功');
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>