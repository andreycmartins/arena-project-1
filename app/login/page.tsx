'use client'

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useMediaQuery } from 'react-responsive'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const LoginFormSchema = z.object({
  email: z.string().email({ message: 'Digite um e-mail inválido' }).min(1, {
    message: 'Email deve conter ao menos 1 caractere.',
  }),
  password: z
    .string()
    .min(1, { message: 'Senha deve conter ao menos 1 caractere.' }),
})

export type LoginFormInputs = z.infer<typeof LoginFormSchema>

export default function Component() {
  const form = useForm<LoginFormInputs>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(data: LoginFormInputs) {
    console.log(data)
  }

  const smDown = useMediaQuery({ maxWidth: 600 })
  return (
    <div className="relative">
      <Link href="/">
        <Button variant="outline" className="m-5">
          <ArrowLeft className="mr-3" />
          Retornar para página inicial
        </Button>
      </Link>
      <div className="flex w-full justify-center items-center h-screen">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Card
              className={smDown ? 'w-[100%]' : ''}
              style={{ border: 'none', borderRadius: smDown ? '0' : '' }}
            >
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Login</CardTitle>
                <CardDescription>
                  Digite seu e-mail e senha para acessar sua conta
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-mail</FormLabel>
                          <FormControl>
                            <Input placeholder="E-mail" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Senha</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Senha"
                              type="password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button className="w-full" type="submit">
                    Login
                  </Button>
                  <div
                    className="text-sm font-medium leading-none"
                    style={{ marginTop: '1rem' }}
                  >
                    Esqueci a senha
                  </div>
                </div>
                <Button className="w-full mt-4" type="submit">
                  Faça login com o google
                </Button>
              </CardContent>
            </Card>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}
