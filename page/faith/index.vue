<script setup lang="ts">
  import AreaChart from "~/component/ui/chart/AreaChart.vue";
</script>

<template>
  <div class="faith-container">
    <div class="header">
      <img src="/icon/ic_chevron_left.svg" alt="chevron-left" @click="$router.back()" />
      <div>State of faith</div>
    </div>
    <div class="my-faith">
      <div class="title">It's your faith state.</div>
      <div class="date">From <strong>April 30, 2025</strong></div>
      <div class="date">to <strong>May 30, 2025</strong></div>
    </div>
    <div class="chart">
      <AreaChart />
    </div>
    <div class="topic">
      <div class="subject">Key Exploration Topics</div>
      <div class="text">• Parent-Child Relationships (3)</div>
      <div class="text">• Anger Management (2)</div>
      <div class="text">• Forgiveness (2)</div>
    </div>
    <div class="keywords">
      <div class="subject">Prayer Keyword Analysis</div>
      <div class="tags">
        <div class="tag">Grace</div>
        <div class="tag">Thanks</div>
        <div class="tag">Forgiveness</div>
        <div class="tag">Peace</div>
        <div class="tag">Love</div>
      </div>
      <div class="tags">
        <div class="tag">Conversation</div>
        <div class="tag">Child</div>
        <div class="tag">Judgement</div>
      </div>
    </div>
    <div class="verses">
      <div class="subject">Top 3 Helpful Verses</div>
      <div class="text">
        1. <strong>Ephesians 6:4</strong><br />
        “Do not provoke your children to anger…”
      </div>
      <div class="text">
        2. <strong>Proverbs 15:1</strong><br />
        “A soft answer turns away wrath…”
      </div>
      <div class="text">
        3. <strong>James 1:19</strong><br />
        “Let every person be quick to hear…”
      </div>
      <div class="text">• (View Details)</div>
    </div>
    <div class="suggest">
      <div class="subject">Suggested Topics</div>
      <div class="text">• Effective Communication With Your Child</div>
      <div class="text">• Wisdom and Balance in Parenting</div>
      <div class="text">• Meaningful Relationships with Others</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .faith-container {
    background-color: #090607;
    padding: 16px;
    width: 100%;
    height: 812px;
    color: #c6c6c6;
    overflow-y: auto;

    .header {
      display: flex;
      align-items: center;
      font-size: 18px;
      gap: 8px;
    }

    .my-faith {
      margin-top: 28px;

      .title {
        font-size: 24px;
        padding: 12px 0;
      }
      .date {
        font-size: 14px;
      }
    }

    .keywords {
      margin-top: 20px;

      .tags {
        display: flex;
        flex-direction: row;
        font-size: 11px;
        gap: 4px;
        margin-top: 8px;

        .tag {
          padding: 4px 12px 6px 12px;
          border-radius: 100px;
          border: 1px solid #c6c6c6;
        }
      }
    }

    .chart,
    .topic,
    .verses,
    .suggest {
      margin-top: 20px;
    }

    .subject {
      font-size: 16px;
      padding: 12px 0;
      font-weight: 700;
    }

    .text {
      font-size: 14px;
    }
  }
</style>
