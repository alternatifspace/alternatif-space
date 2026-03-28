<script lang="ts">
	const parties = [
		{ name: 'Partai Hijau', members: 234, color: '#16a34a', emoji: '🌿' },
		{ name: 'Gerakan Baru', members: 189, color: '#7c3aed', emoji: '⚡' },
		{ name: 'Api Rakyat', members: 142, color: '#dc2626', emoji: '🔥' }
	];
</script>

<div class="bg-[#0e0a04] min-h-screen flex flex-col relative overflow-hidden">
	<!-- Grid overlay -->
	<div
		class="absolute inset-0 pointer-events-none"
		style="background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 48px 48px;"
	></div>

	<!-- Content -->
	<div class="relative flex flex-col flex-1 px-6 pt-6 pb-8 max-w-md mx-auto w-full">
		<!-- Header -->
		<header class="flex items-center justify-between mb-12">
			<span class="text-white font-medium text-base tracking-tight">
				alternatif<span class="text-amber-400">.space</span>
			</span>
			<span
				class="border border-amber-500 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full tracking-widest"
			>
				BETA
			</span>
		</header>

		<!-- Hero -->
		<section class="flex-1">
			<p class="text-amber-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">
				Platform Demokrasi Digital
			</p>

			<h1 class="text-white text-5xl font-bold leading-[1.1] mb-6">
				Bukan sekadar<br />
				<em class="text-amber-400" style="font-family: Georgia, serif;">pilih</em> dan<br />
				tunggu.
			</h1>

			<p class="text-zinc-400 text-base leading-relaxed mb-10">
				Bentuk partai. Debat isu nyata. Belajar demokrasi lewat tindakan — bukan tontonan.
			</p>

			<!-- Party cards -->
			<div class="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6 mb-12 scrollbar-none">
				{#each parties as party}
					<div
						class="flex-none flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl px-4 py-3 min-w-[180px]"
					>
						<div
							class="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-none"
							style="background-color: {party.color}22; border: 1px solid {party.color}55;"
						>
							{party.emoji}
						</div>
						<div>
							<p class="text-white text-sm font-semibold leading-tight">{party.name}</p>
							<p class="text-zinc-500 text-xs mt-0.5">{party.members} anggota</p>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- CTA buttons -->
		<div class="flex flex-col gap-3">
			<a
				href="/daftar"
				class="w-full bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-zinc-900 font-bold text-base py-4 rounded-2xl transition-colors text-center"
			>
				Mulai — Daftar Gratis
			</a>
			<a
				href="/masuk"
				class="w-full bg-zinc-800/80 hover:bg-zinc-700/80 active:bg-zinc-800 text-white font-medium text-base py-4 rounded-2xl transition-colors border border-zinc-700 text-center"
			>
				Sudah punya akun? Masuk
			</a>
		</div>

		<!-- Footer -->
		<p class="text-zinc-600 text-xs text-center mt-6">
			Open source · Didanai donasi · Independen
		</p>
	</div>
</div>

<style>
	.scrollbar-none {
		scrollbar-width: none;
	}
	.scrollbar-none::-webkit-scrollbar {
		display: none;
	}
</style>
