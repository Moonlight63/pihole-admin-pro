<script setup>
import { useClients } from '@/stores/clients'

const titleStack = ref(['Admin', 'Dashboard'])

const chartData = ref(null)

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData()
}

onMounted(() => {
  fillChartData()
})

const storeClients = useClients()

const clientBarItems = computed(() => storeClients.clients.slice(0, 3))

const transactionBarItems = computed(() => storeClients.history.slice(0, 3))
</script>

<template>
  <TitleBar :titleStack="titleStack" />
  <HeroBar>Dashboard</HeroBar>
  <MainSection>
    <!-- <notification
      color="info"
      :icon="mdiGithub"
    >
      Please star this project on
      <a
        href="https://github.com/justboil/admin-one-vue-tailwind"
        class="underline"
        target="_blank"
      >GitHub</a>
      <template #right>
        <jb-button
          href="https://github.com/justboil/admin-one-vue-tailwind"
          :icon="mdiGithub"
          :outline="darkMode"
          label="GitHub"
          target="_blank"
          small
        />
      </template>
    </notification> -->
    <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
      <CardWidget
        trend="12%"
        trendType="up"
        color="text-emerald-500"
        :icon="mdiAccountMultiple"
        :number="512"
        label="Clients"
      />
      <CardWidget
        trend="12%"
        trendType="down"
        color="text-blue-500"
        :icon="mdiCartOutline"
        :number="7770"
        prefix="$"
        label="Sales"
      />
      <CardWidget
        trend="Overflow"
        trendType="alert"
        color="text-red-500"
        :icon="mdiChartTimelineVariant"
        :number="256"
        suffix="%"
        label="Performance"
      />
    </div>

    <div class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-2">
      <div class="flex flex-col justify-between">
        <CardTransactionBar
          v-for="(transaction, index) in transactionBarItems"
          :key="index"
          :amount="transaction.amount"
          :date="transaction.date"
          :business="transaction.business"
          :type="transaction.type"
          :name="transaction.name"
          :account="transaction.account"
        />
      </div>
      <div class="flex flex-col justify-between">
        <CardClientBar
          v-for="client in clientBarItems"
          :key="client.id"
          :name="client.name"
          :login="client.login"
          :date="client.created"
          :progress="client.progress"
        />
      </div>
    </div>

    <TitleSubBar :icon="mdiChartPie" title="Trends overview" />

    <CardComponent
      title="Performance"
      :icon="mdiFinance"
      :headerIcon="mdiReload"
      class="mb-6"
      @headerIconClick="fillChartData"
    >
      <div v-if="chartData">
        <LineChart :data="chartData" class="h-96" />
      </div>
    </CardComponent>

    <TitleSubBar :icon="mdiAccountMultiple" title="Clients" />

    <Notification color="info" :icon="mdiMonitorCellphone">
      <b>Responsive table.</b> Collapses on mobile
    </Notification>

    <CardComponent
      :icon="mdiMonitorCellphone"
      title="Responsive table"
      hasTable
    >
      <UsersTable />
    </CardComponent>

    <CardComponent
      :icon="mdiMonitorCellphone"
      title="Responsive table"
      hasTable
    >
      <ClientsTable />
    </CardComponent>
  </MainSection>
</template>

<route lang="yaml">
meta:
  layout: 'default'
  title: 'Original Home'
  icon: 'mdi:desktop-mac'
</route>
