<template>
  <div class="wrapper">
    <section class="editor">
      <div class="icon-menu">
        <svg class="icon" @click="copyToClipboard">
          <use xlink:href="/src/assets/sprite.svg#icon-clipboard"></use>
        </svg>
        <svg class="icon">
          <use xlink:href="/src/assets/sprite.svg#icon-code"></use>
        </svg>
        <svg class="icon" @click="makeBold">
          <use xlink:href="/src/assets/sprite.svg#icon-format-bold"></use>
        </svg>
        <svg class="icon" @click="makeItalic">
          <use xlink:href="/src/assets/sprite.svg#icon-format-italic"></use>
        </svg>
        <svg class="icon" @click="makeUnderline">
          <use xlink:href="/src/assets/sprite.svg#icon-format-underline"></use>
        </svg>
        <svg class="icon">
          <use xlink:href="/src/assets/sprite.svg#icon-format-font-size"></use>
        </svg>
        <svg class="icon" @click="makeIndent">
          <use xlink:href="/src/assets/sprite.svg#icon-indent-increase"></use>
        </svg>
        <svg class="icon" @click="makeDedent">
          <use xlink:href="/src/assets/sprite.svg#icon-indent-decrease"></use>
        </svg>
        <svg class="icon" @click="makeList">
          <use xlink:href="/src/assets/sprite.svg#icon-list"></use>
        </svg>
        <svg class="icon" @click="makePhoto">
          <use xlink:href="/src/assets/sprite.svg#icon-photo"></use>
        </svg>
      </div>
      <h2 class="editor-title">Editor</h2>
      <textarea
        name="Editor"
        id="Editor"
        v-model="EditorText"
        placeholder="Enter your text here..."
      ></textarea>
    </section>
    <section class="preview">
      <div class="preview-icon-menu">
        <svg class="icon" @click="show">
          <use xlink:href="/src/assets/sprite.svg#icon-view-hide"></use>
        </svg>
        <svg class="icon">
          <use xlink:href="/src/assets/sprite.svg#icon-view-show"></use>
        </svg>
        <svg class="icon" id="cog" @click="openSettings">
          <use xlink:href="/src/assets/sprite.svg#icon-cog"></use>
        </svg>
      </div>
      <h2 class="preview-title">Preview</h2>
      <textarea name="Preview" id="Preview" v-text="convertedText" :text="PreviewText"></textarea>
    </section>
  </div>
</template>

<script>
import marked from "../Marked/init.js";
import renderer from "../Marked/init.js";

export default {
  name: "Interface",
  data() {
    return {
      EditorText: "",
      PreviewText: ""
    };
  },
  methods: {
    makeBold() {
      this.EditorText = `**${this.EditorText}**`;
    },
    makeItalic() {
      this.EditorText = `*${this.EditorText}*`;
    },
    makeList() {
      this.EditorText = `- ${this.EditorText} `;
    },
    makeIndent() {
      this.EditorText = `> ${this.EditorText} `;
    },
    makeUnderline() {
      this.EditorText = `_${this.EditorText}_`;
    },
    makeDedent() {
      this.EditorText = `>> ${this.EditorText} `;
    },
    makePhoto() {
      this.EditorText = `![${this.EditorText}](https://imageURL.com)`;
    },
    openSettings() {},
    copyToClipboard() {
      console.log(this.EditorText);
    },
    show() {}
  },
  computed: {
    convertedText() {
      return marked(this.EditorText, {
        sanitize: true
      });
    },
    copyText() {
      console.log(convertedText);
    }
  },
  created() {
    console.log(marked);
  }
};
</script>

<style scoped>
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
}
.wrapper {
  max-width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, 40rem);
  grid-template-rows: repeat(auto-fit, 30rem);
  justify-content: center;
  grid-gap: 1rem 1rem;
}
.editor {
  max-width: 40rem;
  height: 30rem;
  border: 1px solid #444;
  border-top: 2px solid #8a5cea;
  border-radius: 0.3rem;
  box-shadow: 2px 3px 12px 0px rgba(0, 0, 0, 0.75);
}
.icon-menu {
  max-width: 40rem;
  height: 1.6rem;
  border-bottom: 1px solid #ddd;
  padding: 0.2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.icon {
  width: 1rem;
  height: 1rem;
  fill: #aaa;
  margin-right: 0.5rem;
}
.icon:hover {
  cursor: pointer;
  fill: #2660a4;
}

.preview-icon-menu {
  max-width: 40rem;
  height: 1.6rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0.2rem;
}
.editor-title {
  padding: 0.5rem;
  font-family: "Raleway";
  font-size: 1rem;
  font-weight: 500;
}
#Editor {
  width: 100%;
  height: 87%;
  padding: 0.5rem;
  outline: none;
  border: none;
  overflow-y: auto;
}
.preview {
  height: 30rem;
  border: 1px solid #444;
  border-top: 2px solid #8a5cea;
  border-radius: 0.3rem;
  box-shadow: 2px 3px 12px 0px rgba(0, 0, 0, 0.75);
}
.preview-title {
  padding: 0.5rem;
  font-family: "Raleway";
  font-size: 1rem;
  font-weight: 500;
}
.preview-title::after {
  display: block;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #61e294;
}
#Preview {
  width: 100%;
  height: 87%;
  outline: none;
  border: none;
  padding: 0.5rem;
  overflow-y: auto;
}
@media screen and (max-width: 650px) {
  .wrapper {
    grid-template-columns: repeat(auto-fill, 100%);
  }
}
</style>
