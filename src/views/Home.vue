<template>
    <div>
        <button @click="aaa">button</button>
    </div>
</template>

<script>
export default {
    name: "home",
    methods: {
        async aaa() {
            let params = {
                remeber: false,
                account: "zhouwei",
                password: "sd928928"
            };
            // this.$service
            //     .getChengpin(data)
            //     .then(res => {
            //         console.log(res);
            //     })
            //     .catch(err => {
            //         console.log(err);
            //     });
                let {data} = await this.$service.getChengpin(params)
                console.log(data);
                
                // window.open(data)
        }
    }
};
</script>

<style lang="scss" scoped>
</style>