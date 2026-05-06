import React from "react";
import { Check, MessageCircle, AlertCircle, Utensils, BarChart3, Package, Smartphone, Users, ClipboardList, ArrowRight } from "lucide-react";

export default function SmartOrderProLanding() {
  const whatsappLink = "https://wa.me/5577999846107?text=Quero%20testar%20o%20SmartOrder%20Pro";

  const features = [
    { icon: ClipboardList, title: "Registrar vendas", text: "Venda com poucos cliques, sem papel e sem bagunça." },
    { icon: Utensils, title: "Pedido para cozinha", text: "Envie pedidos direto para a cozinha ou impressão." },
    { icon: Package, title: "Controle de estoque", text: "Baixa automática e alerta quando algo estiver acabando." },
    { icon: MessageCircle, title: "Pedidos pelo WhatsApp", text: "Receba pedidos de forma mais organizada pelo WhatsApp." },
    { icon: Smartphone, title: "Cardápio digital", text: "Mostre produtos, preços e fotos para seus clientes." },
    { icon: BarChart3, title: "Painel de vendas", text: "Veja vendas do dia, pedidos ativos e produtos mais vendidos." },
    { icon: Users, title: "Clientes", text: "Salve nome, telefone e histórico de pedidos." },
    { icon: Check, title: "Relatórios simples", text: "Entenda o que vende mais e acompanhe seu negócio." },
  ];

  const plans = [
    { name: "Inicial", price: "R$ 29", desc: "Ideal para começar", items: ["Registro de vendas", "Cadastro de produtos", "Painel básico"] },
    { name: "Completo", price: "R$ 59", desc: "Mais escolhido", popular: true, items: ["Vendas completas", "Envio para cozinha", "Controle de estoque", "Pedidos pelo WhatsApp", "Cadastro de clientes"] },
    { name: "Pro", price: "R$ 89", desc: "Para mais controle", items: ["Tudo do Completo", "Relatórios avançados", "Suporte prioritário", "Mais usuários"] },
  ];

  return (
    <main className="min-h-screen bg-[#070d1a] text-white font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#070d1a]/80 backdrop-blur border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Utensils size={22} />
            </div>
            <span className="text-2xl font-extrabold tracking-tight">SmartOrder Pro</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#funcionalidades" className="hover:text-white">Funcionalidades</a>
            <a href="#planos" className="hover:text-white">Ver planos</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contato" className="hover:text-white">Contato</a>
            <a href={whatsappLink} className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 text-white font-bold hover:scale-105 transition">Testar agora</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden pt-36 pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(37,99,235,.2),transparent_30%)]" />
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2 text-emerald-300 text-sm font-semibold mb-8">
              <Check size={16} /> Sistema em implantação em negócios locais
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
              Pare de perder pedidos e <span className="bg-gradient-to-r from-blue-500 to-emerald-400 bg-clip-text text-transparent">organize seu negócio hoje</span>
            </h1>
            <p className="mt-8 text-xl text-slate-300 max-w-2xl leading-relaxed">
              Controle vendas, envie pedidos para a cozinha e acompanhe tudo em um sistema simples e rápido.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href={whatsappLink} className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 font-bold text-center hover:scale-105 transition">Testar agora</a>
              <a href={whatsappLink} className="px-8 py-4 rounded-full border border-white/25 font-bold text-center hover:bg-white/10 transition flex items-center justify-center gap-2"><MessageCircle size={19} /> Falar no WhatsApp</a>
            </div>
          </div>

          <div className="bg-[#121b35] border border-white/10 rounded-3xl p-6 shadow-2xl shadow-blue-950/40">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="ml-4 text-sm text-slate-400 font-semibold">SmartOrder Pro Dashboard</span>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-5">
              <Card title="Vendas do dia" value="2.847" green />
              <Card title="Pedidos ativos" value="42" blue />
              <Card title="Clientes" value="156" green />
            </div>
            <div className="rounded-2xl border border-red-400/30 bg-red-500/10 p-4 flex items-center gap-4 mb-5">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400"><AlertCircle /></div>
              <div><p className="font-bold text-red-400">Alerta de estoque</p><p className="text-sm text-slate-300">Pão francês está acabando (3 unidades)</p></div>
            </div>
            {[
              ["Hambúrguer Artesanal", "Pronto", "bg-emerald-400"],
              ["Pizza Calabresa G", "Preparando", "bg-yellow-400"],
              ["Açaí 500ml", "Novo", "bg-blue-500"],
            ].map(([item, status, color]) => (
              <div key={item} className="flex justify-between items-center bg-[#1a2545] rounded-xl p-4 mb-3">
                <span>{item}</span><span className={`${color} text-white text-xs px-3 py-1 rounded-full font-bold`}>{status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0b1224]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Seu negócio está desorganizado?</h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">Pedido no papel, WhatsApp bagunçado e falta de controle fazem você perder tempo e dinheiro.</p>
          <div className="grid md:grid-cols-5 gap-4 mt-12 text-left">
            {['Pedidos anotados errado','Perda de vendas','Bagunça no WhatsApp','Falta de controle de estoque','Não saber quanto lucrou'].map((text) => (
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5 text-slate-200" key={text}>{text}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="funcionalidades" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black">A solução simples que resolve tudo</h2>
            <p className="mt-5 text-slate-300 text-lg">Organize seus pedidos, vendas e estoque automaticamente.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl bg-white/[0.04] border border-white/10 p-6 hover:bg-white/[0.07] transition">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-400 flex items-center justify-center mb-5"><Icon size={23} /></div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-slate-400 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0b1224]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Como funciona</h2>
            <p className="text-slate-300 text-lg">Um fluxo simples para qualquer pessoa usar, mesmo sem entender de tecnologia.</p>
          </div>
          <div className="space-y-4">
            {["Cadastre seus produtos", "Receba pedidos", "Envie para a cozinha", "O sistema atualiza tudo", "Acompanhe no painel"].map((step, i) => (
              <div key={step} className="flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 flex items-center justify-center font-black">{i+1}</div>
                <span className="font-bold text-lg">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="planos" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black">Planos simples</h2>
            <p className="mt-5 text-slate-300 text-lg">Escolha o melhor plano para o seu negócio.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className={`relative rounded-3xl p-7 border ${plan.popular ? 'bg-gradient-to-b from-blue-500/20 to-emerald-400/10 border-emerald-400/50 scale-[1.02]' : 'bg-white/[0.04] border-white/10'}`}>
                {plan.popular && <div className="absolute -top-4 left-7 px-4 py-2 rounded-full bg-emerald-400 text-[#07101f] text-sm font-black">MAIS ESCOLHIDO</div>}
                <h3 className="text-2xl font-black">{plan.name}</h3>
                <p className="text-slate-400 mt-1">{plan.desc}</p>
                <div className="mt-6 mb-6"><span className="text-5xl font-black">{plan.price}</span><span className="text-slate-400">/mês</span></div>
                <ul className="space-y-4 mb-8">
                  {plan.items.map((item) => <li key={item} className="flex gap-3 text-slate-200"><Check className="text-emerald-400 shrink-0" size={20} />{item}</li>)}
                </ul>
                <a href={whatsappLink} className={`block text-center rounded-full px-6 py-4 font-bold ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-emerald-400' : 'bg-white/10 hover:bg-white/15'} transition`}>Começar agora</a>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 mt-8">Instalação e suporte disponíveis.</p>
        </div>
      </section>

      <section id="faq" className="py-24 bg-[#0b1224]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">Perguntas frequentes</h2>
          {[
            ["Funciona no celular?", "Sim. O sistema foi pensado para funcionar no celular, tablet e computador."],
            ["É difícil usar?", "Não. A ideia é ser simples para qualquer dono de negócio usar no dia a dia."],
            ["Serve para pequeno negócio?", "Sim. Ele foi criado justamente para pequenos negócios locais."],
            ["Controla estoque?", "Sim. O sistema pode baixar estoque automaticamente após vendas."],
            ["Funciona com WhatsApp?", "Sim. O botão leva direto para o WhatsApp e os pedidos podem ser organizados por lá."],
          ].map(([q, a]) => (
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 mb-4" key={q}>
              <h3 className="font-bold text-xl mb-2">{q}</h3>
              <p className="text-slate-400">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Comece a organizar seu negócio hoje</h2>
          <p className="text-slate-300 text-xl mb-10">Simples, rápido e feito para pequenos negócios.</p>
          <a href={whatsappLink} className="inline-flex items-center gap-3 px-9 py-5 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 font-black hover:scale-105 transition">Falar no WhatsApp <ArrowRight /></a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-slate-500">
        <p>© 2026 SmartOrder Pro. Contato • Planos • Suporte • Termos</p>
      </footer>
    </main>
  );
}

function Card({ title, value, green, blue }) {
  return (
    <div className="rounded-2xl bg-[#1a2545] p-4">
      <p className="text-sm text-slate-400 mb-2">{title}</p>
      <p className={`text-2xl font-black ${green ? 'text-emerald-400' : blue ? 'text-blue-500' : 'text-white'}`}>{value}</p>
    </div>
  );
}
