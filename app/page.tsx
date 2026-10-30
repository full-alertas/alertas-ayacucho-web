"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";

import {
  AlertTriangle,
  BellRing,
  CheckCircle2,
  ChevronDown,
  Download,
  LocateFixed,
  MapPinned,
  Menu,
  Navigation,
  ShieldCheck,
  Smartphone,
  Volume2,
  X,
} from "lucide-react";

const APK_URL =
  "https://github.com/full-alertas/alertas-ayacucho-web/releases/download/v1.0.3/AlertasAyacucho.apk";

type PasoInstalacion = {
  titulo: string;
  descripcion: string;
  icono: LucideIcon;
};

type FuncionAplicacion = {
  titulo: string;
  descripcion: string;
  icono: LucideIcon;
};

const funciones: FuncionAplicacion[] = [
  {
    titulo: "Alertas en tiempo real",
    descripcion:
      "Conoce los reportes compartidos por la comunidad de Ayacucho.",
    icono: MapPinned,
  },
  {
    titulo: "Avisos por voz",
    descripcion:
      "Recibe alertas cercanas mientras mantienes la atención en la vía.",
    icono: Volume2,
  },
  {
    titulo: "Mapa interactivo",
    descripcion:
      "Visualiza incidentes, valida reportes y ayuda a otros conductores.",
    icono: Navigation,
  },
];

const pasosInstalacion: PasoInstalacion[] = [
  {
    titulo: "Descarga la aplicación",
    descripcion:
      "Pulsa el botón de descarga y espera a que termine el archivo APK.",
    icono: Download,
  },
  {
    titulo: "Abre el archivo APK",
    descripcion:
      "Abre la descarga desde el navegador o desde la carpeta Descargas del celular.",
    icono: Smartphone,
  },
  {
    titulo: "Autoriza la instalación",
    descripcion:
      "Si Android lo solicita, permite temporalmente que el navegador instale aplicaciones.",
    icono: ShieldCheck,
  },
  {
    titulo: "Instala y abre",
    descripcion:
      "Pulsa Instalar. Después abre Alertas Ayacucho, inicia sesión y concede los permisos necesarios.",
    icono: CheckCircle2,
  },
];

export default function Home() {
  const [menuAbierto, setMenuAbierto] =
    useState(false);

  const [pasoActivo, setPasoActivo] =
    useState(0);

  const [aceptoInstalacion, setAceptoInstalacion] =
    useState(false);

  function descargarApk() {
    if (!aceptoInstalacion) {
      setAceptoInstalacion(true);
      return;
    }

    window.location.href = APK_URL;
  }

  return (
    <main className="min-h-screen bg-[#f5f8f6] text-slate-900">
      <Encabezado
        menuAbierto={menuAbierto}
        setMenuAbierto={setMenuAbierto}
      />

      <Presentacion />

      <SeccionFunciones />

      <SeccionInstalacion
        pasoActivo={pasoActivo}
        setPasoActivo={setPasoActivo}
      />

      <SeccionSeguridad />

      <SeccionDescarga
        aceptoInstalacion={aceptoInstalacion}
        setAceptoInstalacion={
          setAceptoInstalacion
        }
        descargarApk={descargarApk}
      />

      <PiePagina />
    </main>
  );
}

type EncabezadoProps = {
  menuAbierto: boolean;
  setMenuAbierto: (
    valor: boolean
  ) => void;
};

function Encabezado({
  menuAbierto,
  setMenuAbierto,
}: EncabezadoProps) {
  function cerrarMenu() {
    setMenuAbierto(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <a
          href="#inicio"
          className="flex items-center gap-3"
        >
          <Logo />

          <div>
            <p className="font-extrabold tracking-tight">
              Alertas Ayacucho
            </p>

            <p className="text-xs text-slate-500">
              Conduce informado
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">
          <a
            href="#funciones"
            className="transition hover:text-emerald-700"
          >
            Funciones
          </a>

          <a
            href="#instalacion"
            className="transition hover:text-emerald-700"
          >
            Cómo instalar
          </a>

          <a
            href="#seguridad"
            className="transition hover:text-emerald-700"
          >
            Seguridad
          </a>

          <a
            href="#descargar"
            className="rounded-xl bg-emerald-600 px-5 py-3 text-white transition hover:bg-emerald-700"
          >
            Descargar
          </a>
        </nav>

        <button
          type="button"
          className="rounded-xl p-2 md:hidden"
          onClick={() =>
            setMenuAbierto(!menuAbierto)
          }
          aria-label="Abrir menú"
        >
          {menuAbierto ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {menuAbierto && (
        <nav className="grid gap-4 border-t border-slate-200 bg-white px-5 py-5 text-sm font-semibold md:hidden">
          <a
            href="#funciones"
            onClick={cerrarMenu}
          >
            Funciones
          </a>

          <a
            href="#instalacion"
            onClick={cerrarMenu}
          >
            Cómo instalar
          </a>

          <a
            href="#seguridad"
            onClick={cerrarMenu}
          >
            Seguridad
          </a>

          <a
            href="#descargar"
            onClick={cerrarMenu}
            className="text-emerald-700"
          >
            Descargar APK
          </a>
        </nav>
      )}
    </header>
  );
}


function Presentacion() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.14),transparent_35%),radial-gradient(circle_at_10%_75%,rgba(52,211,153,0.10),transparent_30%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">

        {/* Texto principal */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-bold text-emerald-700 shadow-sm">
            <BellRing className="h-4 w-4" />
            Alertas comunitarias en tiempo real
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
            Muévete por Ayacucho con información de la comunidad.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Descarga Alertas Ayacucho para reportar incidentes,
            validar alertas y recibir avisos durante tus recorridos.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#descargar"
              className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-emerald-600 px-7 font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              <Download className="mr-2 h-5 w-5" />
              Descargar aplicación
            </a>

            <a
              href="#funciones"
              className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 font-bold text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50"
            >
              Conocer funciones
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
              Descarga oficial
            </span>

            <span className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-emerald-600" />
              Disponible para Android
            </span>
          </div>
        </div>

        {/* Vista ilustrativa de la aplicación */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-5 rounded-[40px] bg-emerald-200/40 blur-3xl" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-slate-200 bg-[#e9f0eb] shadow-2xl">

            {/* Fondo tipo mapa */}
            <div className="absolute inset-0 opacity-70">
              <div className="absolute inset-0 bg-[linear-gradient(32deg,transparent_48%,#cad5ce_49%,#cad5ce_51%,transparent_52%),linear-gradient(148deg,transparent_47%,#d4ddd7_48%,#d4ddd7_51%,transparent_52%)] bg-[length:110px_90px]" />
            </div>

            {/* Encabezado */}
            <div className="absolute left-4 right-4 top-5 flex items-center gap-3 rounded-2xl border border-white bg-white/95 p-3 shadow-lg">
              <Logo />

              <div className="flex-1">
                <p className="font-extrabold">
                  Alertas Ayacucho
                </p>

                <p className="text-xs text-emerald-700">
                  Modo conducción activo
                </p>
              </div>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold text-emerald-700">
                EN LÍNEA
              </span>
            </div>

            {/* Marcadores */}
            <div className="absolute left-[43%] top-[39%] grid h-16 w-16 place-items-center rounded-full border-4 border-white bg-emerald-600 shadow-xl">
              <Navigation className="h-8 w-8 fill-white text-white" />
            </div>

            <div className="absolute left-[22%] top-[30%] grid h-11 w-11 place-items-center rounded-full bg-amber-500 shadow-lg">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>

            <div className="absolute right-[18%] top-[51%] grid h-11 w-11 place-items-center rounded-full bg-red-500 shadow-lg">
              <BellRing className="h-6 w-6 text-white" />
            </div>

            {/* Tarjeta inferior */}
            <div className="absolute bottom-4 left-4 right-4 rounded-3xl bg-white/95 p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-100">
                  <LocateFixed className="h-5 w-5 text-emerald-700" />
                </div>

                <div>
                  <p className="text-[11px] font-bold text-slate-400">
                    TU UBICACIÓN
                  </p>

                  <p className="text-sm font-bold">
                    Ayacucho, Perú
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-4 font-bold text-white">
                <AlertTriangle className="h-5 w-5" />
                Reportar un incidente
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function SeccionFunciones() {
  return (
    <section
      id="funciones"
      className="mx-auto max-w-7xl px-5 py-20 md:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-extrabold uppercase tracking-widest text-emerald-700">
          Hecha para la vía
        </p>

        <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
          Información útil cuando más la necesitas
        </h2>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {funciones.map((funcion) => (
          <TarjetaFuncion
            key={funcion.titulo}
            funcion={funcion}
          />
        ))}
      </div>
    </section>
  );
}

function TarjetaFuncion({
  funcion,
}: {
  funcion: FuncionAplicacion;
}) {
  const Icono = funcion.icono;

  return (
    <article className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-100">
        <Icono className="h-6 w-6 text-emerald-700" />
      </div>

      <h3 className="mt-5 text-lg font-extrabold">
        {funcion.titulo}
      </h3>

      <p className="mt-2 leading-6 text-slate-600">
        {funcion.descripcion}
      </p>
    </article>
  );
}

type SeccionInstalacionProps = {
  pasoActivo: number;
  setPasoActivo: (
    valor: number
  ) => void;
};

function SeccionInstalacion({
  pasoActivo,
  setPasoActivo,
}: SeccionInstalacionProps) {
  return (
    <section
      id="instalacion"
      className="border-y border-slate-200 bg-white"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-widest text-emerald-700">
            Guía de instalación
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Instálala en pocos minutos
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            La descarga se realiza mediante un archivo
            APK. Android puede solicitar autorización
            para instalar desde el navegador.
          </p>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
            Descarga la aplicación solamente desde
            esta página oficial.
          </div>
        </div>

        <div className="grid gap-3">
          {pasosInstalacion.map(
            (paso, indice) => (
              <PasoInstalacionItem
                key={paso.titulo}
                paso={paso}
                numero={indice + 1}
                activo={pasoActivo === indice}
                onClick={() =>
                  setPasoActivo(indice)
                }
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

type PasoInstalacionItemProps = {
  paso: PasoInstalacion;
  numero: number;
  activo: boolean;
  onClick: () => void;
};

function PasoInstalacionItem({
  paso,
  numero,
  activo,
  onClick,
}: PasoInstalacionItemProps) {
  const Icono = paso.icono;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-3xl border p-5 text-left transition ${
        activo
          ? "border-emerald-300 bg-emerald-50"
          : "border-slate-200 bg-white hover:border-emerald-200"
      }`}
    >
      <div className="flex gap-4">
        <div
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${
            activo
              ? "bg-emerald-600 text-white"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          <Icono className="h-5 w-5" />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold">
              <span className="mr-2 text-emerald-700">
                {numero}.
              </span>

              {paso.titulo}
            </h3>

            <ChevronDown
              className={`h-5 w-5 transition ${
                activo
                  ? "rotate-180 text-emerald-700"
                  : "text-slate-400"
              }`}
            />
          </div>

          {activo && (
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {paso.descripcion}
            </p>
          )}
        </div>
      </div>
    </button>
  );
}

function SeccionSeguridad() {
  return (
    <section
      id="seguridad"
      className="mx-auto max-w-7xl px-5 py-20 md:px-8"
    >
      <div className="rounded-[32px] bg-slate-950 p-8 text-white md:p-12">
        <div className="flex items-center gap-3 text-emerald-300">
          <ShieldCheck className="h-7 w-7" />

          <p className="font-extrabold">
            Descarga oficial
          </p>
        </div>

        <h2 className="mt-5 text-3xl font-black md:text-4xl">
          Instala siempre la versión publicada aquí
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-300">
          Alertas Ayacucho utiliza una conexión segura,
          autenticación y una infraestructura preparada
          para proteger el acceso.
        </p>
      </div>
    </section>
  );
}

type SeccionDescargaProps = {
  aceptoInstalacion: boolean;
  setAceptoInstalacion: (
    valor: boolean
  ) => void;
  descargarApk: () => void;
};

function SeccionDescarga({
  aceptoInstalacion,
  setAceptoInstalacion,
  descargarApk,
}: SeccionDescargaProps) {
  return (
    <section
      id="descargar"
      className="bg-emerald-700"
    >
      <div className="mx-auto max-w-4xl px-5 py-20 text-center text-white">
        <div className="mx-auto w-fit">
          <Logo grande />
        </div>

        <h2 className="mt-6 text-3xl font-black md:text-4xl">
          Descarga Alertas Ayacucho
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-emerald-50">
          Versión 1.0.0 para Android.
        </p>

        <label className="mx-auto mt-7 flex max-w-xl cursor-pointer items-start gap-3 rounded-2xl bg-white/10 p-4 text-left text-sm leading-6">
          <input
            type="checkbox"
            checked={aceptoInstalacion}
            onChange={(evento) =>
              setAceptoInstalacion(
                evento.target.checked
              )
            }
            className="mt-1 h-4 w-4 accent-emerald-300"
          />

          <span>
            Entiendo que Android puede solicitar
            permiso para instalar esta aplicación.
          </span>
        </label>

        <button
          type="button"
          onClick={descargarApk}
          className="mt-6 inline-flex min-h-14 items-center justify-center rounded-2xl bg-white px-8 font-extrabold text-emerald-800 transition hover:bg-emerald-50"
        >
          <Download className="mr-2 h-5 w-5" />

          {aceptoInstalacion
            ? "Última versión disponible"
            : "Descargar última versión"}
        </button>

        <p className="mt-4 text-xs text-emerald-100">
          AlertasAyacucho.apk
        </p>
      </div>
    </section>
  );
}

function PiePagina() {
  return (
    <footer className="bg-slate-950 px-5 py-8 text-center text-sm text-slate-400">
      <p className="font-bold text-white">
        Alertas Ayacucho
      </p>

      <p className="mt-2">
        Viaja informado. Conduce con precaución.
      </p>
    </footer>
  );
}

function Logo({
  grande = false,
}: {
  grande?: boolean;
}) {
  return (
    <div
      className={`grid place-items-center rounded-2xl bg-emerald-600 shadow-sm ${
        grande
          ? "h-16 w-16"
          : "h-11 w-11"
      }`}
    >
      <AlertTriangle
        className={
          grande
            ? "h-8 w-8 text-white"
            : "h-5 w-5 text-white"
        }
      />
    </div>
  );
}