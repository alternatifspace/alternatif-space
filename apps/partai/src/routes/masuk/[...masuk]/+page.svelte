<script lang="ts">
	import { SignIn } from 'svelte-clerk';
</script>

<div class="bg-[#0e0a04] min-h-screen flex flex-col relative overflow-hidden">
	<!-- Grid overlay -->
	<div
		class="absolute inset-0 pointer-events-none"
		style="background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 48px 48px;"
	></div>

	<div class="relative flex flex-col flex-1 px-6 pt-6 pb-8 max-w-md mx-auto w-full">
		<!-- Header -->
		<header class="flex items-center justify-between mb-10">
			<a href="/" class="text-white font-medium text-base tracking-tight">
				alternatif<span class="text-amber-400">.space</span>
			</a>
			<a
				href="/daftar"
				class="text-zinc-400 text-sm hover:text-white transition-colors"
			>
				Belum punya akun? <span class="text-amber-400">Daftar</span>
			</a>
		</header>

		<!-- Title -->
		<div class="mb-8">
			<p class="text-amber-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">Masuk</p>
			<h1 class="text-white text-3xl font-bold leading-tight">
				Selamat datang kembali.
			</h1>
			<p class="text-zinc-400 text-sm mt-2 leading-relaxed">
				Masuk untuk melanjutkan aktivitasmu.
			</p>
		</div>

		<!-- Clerk SignIn component -->
		<div class="flex justify-center">
			<SignIn
				appearance={{
					baseTheme: undefined,
					variables: {
						colorBackground: '#18120a',
						colorInputBackground: '#1c1610',
						colorInputText: '#ffffff',
						colorText: '#ffffff',
						colorTextSecondary: '#a1a1aa',
						colorPrimary: '#fbbf24',
						colorDanger: '#ef4444',
						borderRadius: '0.75rem',
						fontFamily: 'inherit'
					},
					elements: {
						card: 'bg-transparent shadow-none border-0 p-0',
						headerTitle: 'hidden',
						headerSubtitle: 'hidden',
						socialButtonsBlockButton:
							'border-zinc-700 text-white hover:bg-zinc-800 transition-colors',
						formButtonPrimary:
							'bg-amber-400 hover:bg-amber-300 text-zinc-900 font-bold rounded-2xl',
						footerActionLink: 'text-amber-400 hover:text-amber-300',
						identityPreviewEditButton: 'text-amber-400',
						formFieldInput:
							'bg-zinc-900 border-zinc-700 text-white rounded-xl focus:border-amber-400',
						formFieldLabel: 'text-zinc-400 text-sm',
						dividerLine: 'bg-zinc-800',
						dividerText: 'text-zinc-600'
					}
				}}
			/>
		</div>
	</div>
</div>
