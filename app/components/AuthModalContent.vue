<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

const props = defineProps<{
  baseMode: string;
}>();

const mode = ref(props.baseMode);

const title = computed(() => {
  if (mode.value === "login") return "Login";
  return "Signup";
});

const authSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(8, "Must be longer than 8 characters")
    .max(255, "Must be shorter than 255 characters"),
});

type AuthSchema = z.output<typeof authSchema>;

const formState = reactive<Partial<AuthSchema>>({
  email: undefined,
  password: undefined,
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<AuthSchema>) {
  toast.add({
    title: "Success",
    description: "The form has been submitted.",
    color: "success",
  });
  console.log(event.data);
}
</script>

<template>
  <UModal :title="title" :ui="{ footer: 'justify-end' }">
    <template #body>
      <UForm :schema="authSchema" :state="formState" class="space-y-4" @submit="onSubmit">
        <UFormField label="Email" name="email">
          <UInput v-model="formState.email" class="w-full" />
        </UFormField>

        <UFormField label="Password" name="password">
          <UInput v-model="formState.password" type="password" class="w-full" />
        </UFormField>

        <div class="flex justify-end space-x-4">
          <UButton color="neutral" variant="link" @click="mode = 'signup'" v-if="mode === 'login'">Signup</UButton>
          <UButton color="neutral" variant="link" @click="mode = 'login'" v-else>Login</UButton>
          <UButton type="submit" color="neutral" variant="subtle">
            Submit
          </UButton>
        </div>
      </UForm>

      <USeparator class="my-6" label="or" />

      <div class="flex flex-col space-y-4">
        <UButton icon="i-mdi-github" color="neutral" variant="subtle" class="justify-center">Github</UButton>
      </div>
    </template>
  </UModal>
</template>
