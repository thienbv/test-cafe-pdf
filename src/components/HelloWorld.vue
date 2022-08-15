<template>
  <cafe-pdf ref="pdf" @on-success="load" @on-scroll="scroll" :filePath="src">
    <template slot="header">
      pdf-src:<input type="text" v-model.lazy="src" @change="fileChanged">
    </template>
    <template slot="footer">
      <button :disabled="currentNum<=1" @click="pre">pre</button>
      <input type="number" :min="1" :max="pageNum" v-model.number="currentNum" @change="pageChange(currentNum)">
      <button :disabled="currentNum>=pageNum" @click="next">next</button>
      <select v-model="scale" @change="setScale">
        <option value="auto">auto</option>
        <option value="page-actual">actual</option>
        <option value="page-fit">fit</option>
        <option value="page-width">width</option>
        <option value="0.50">50%</option>
        <option value="0.75">75%</option>
        <option value="1">100%</option>
        <option value="1.25">125%</option>
        <option value="1.50">150%</option>
        <option value="1.75">175%</option>
        <option value="2">200%</option>
        <option value="3">300%</option>
        <option value="4">400%</option>
      </select>
      <button @click="print">print</button>
    </template>
  </cafe-pdf>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      src: 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
      pageNum: null,
      scale: 1,
      currentNum: 1
    };
  },
  components: {},
  methods: {
    fileChanged() {
      this.file = this.src;
    },
    load(val) {
      this.pageNum = val;
    },
    setScale() {
      this.$refs.pdf.changeScale(this.scale);
    },
    scroll(val) {
      this.currentNum = val;
    },
    pre(){
      this.$refs.pdf.prePage();
    },
    next(){
      this.$refs.pdf.nextPage();
    },
    pageChange(val) {
      this.$refs.pdf.goToPage(val);
    },
    print() {
      this.$refs.pdf.printFile();
    }
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
#app {
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
@media print {
  #app {
    display: none;
  }
}
</style>