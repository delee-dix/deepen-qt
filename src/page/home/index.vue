<script setup lang="ts">
import { ref } from "vue";
import { useModalStore } from "~/store/modal";

const router = useRouter();

const modalStore = useModalStore();
const surveyChoice = ref("");
const surveyContent = ref("");
const chatContent = ref("");

const clickHistory = () => {
  router.push("/history");
};

const clickTogether = () => {
  router.push("/together");
};

const clickTooltip = () => {
  modalStore.showModal("survey");
};

const clickSurveyChoice = (choice: string) => {
  surveyChoice.value = choice;
};

const clickSurveyConfirm = () => {
  console.log("clickSurveyConfirm");
};
</script>

<template>
  <div class="chat-list">
    <CommonHeader>
      <CommonIcon path="ic_menu_search" :width="24" :height="24" @click="clickHistory" />
      <CommonIcon path="ic_library" :width="24" :height="24" @click="clickTogether" />
    </CommonHeader>
    <div class="hello-container">
      <CommonTooltip
        text="Please invest just 5 seconds!&#10;I'm curious about you!"
        @click="clickTooltip"
      />
      <CommonIcon path="ic_symbol" :width="84" :height="84" />
      <div class="title">
        Hi, <strong>Deepen King</strong>
        <br />
        How are you feeling today?
      </div>
    </div>
    <CommonInputChat v-model="chatContent" isChoice choiceTitle="I am today" />
  </div>
  <CommonModalSurvey
    modalId="survey"
    title="How regularly do you attend worship services?"
    @click-confirm="clickSurveyConfirm"
  >
    <template #body>
      <div class="survey-container">
        <CommonRadioRow
          label="Yes, regularly"
          :model-value="surveyChoice === 'option01'"
          @update:model-value="clickSurveyChoice('option01')"
        />
        <CommonRadioRow
          label="Occasionally"
          :model-value="surveyChoice === 'option02'"
          @update:model-value="clickSurveyChoice('option02')"
        />
        <CommonRadioRow
          label="Rarely"
          :model-value="surveyChoice === 'option03'"
          @update:model-value="clickSurveyChoice('option03')"
        />
        <CommonRadioRow
          label="Please specify"
          :model-value="surveyChoice === 'option04'"
          @update:model-value="clickSurveyChoice('option04')"
        />
        <CommonInputTextarea
          v-model="surveyContent"
          placeholder="Please tell me why you feel that way."
          :disabled="surveyChoice !== 'option04'"
        />
      </div>
    </template>
  </CommonModalSurvey>
</template>

<style lang="scss" scoped>
.chat-list {
  background-color: #090607;
  color: #c6c6c6;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
  box-sizing: border-box;

  .hello-container {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    width: 100%;

    .symbol {
      width: 84px;
      height: 84px;
    }

    .title {
      font-size: 20px;
      line-height: 150%;
      text-align: center;
      width: 100%;
    }
  }
}

.survey-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}

.slide-left-enter-to,
.slide-right-enter-to,
.slide-left-leave-from,
.slide-right-leave-from {
  transform: translateX(0);
}
</style>
