import Swal from "sweetalert2";
import "./fomrContacto.css";

// verificar viewport
const isMobile = window.matchMedia("(max-width: 430px)").matches;

function saludo() {
    isMobile
        ? Swal.fire({
            width: 300,
            title: "Gracias por contactarnos 🫶",
            text: "En breve nos estaremos comunicando con vos",
            showConfirmButton: false,
            timer: 5000,
        })
        : Swal.fire({
            title: "Gracias por contactarnos 🫶",
            text: "En breve nos estaremos comunicando con vos",
            showConfirmButton: false,
            timer: 5000,
        });
};

function saludoError() {
    isMobile ? Swal.fire({
        width: 300,
        icon: "error",
        title: "Oops...",
        text: "Algo salio mal, intenta de nuevo por favor",
    }) :
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo salio mal, intenta de nuevo por favor",
        });
}

async function submit(e: SubmitEvent) {
    e.preventDefault();

    const form = e.target as HTMLFormElement | null;
    if (!form) return;

    const formData = new FormData(form);

    try {
        const response = await fetch("/api/sendMail", {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        if (data.message) {
            saludo();
            form.reset();
        } else {
            saludoError();
        }
    } catch (error) {
        console.error("Error:", error);
        saludoError();
    }
}




const FormContacto = () => {
    return (
        <div
            className="relative flex flex-col items-center lg:flex-row my-6 bg-zinc-200 rounded-[45px] "
        >
            <div className=" items-center w-[90%] py-12  lg:px-20 lg:w-8/12 lg:py-10 z-10">
                <form
                    onSubmit={submit}
                    className="space-y-8 lg:w-full"
                >
                    {/*                     <div className="flex justify-between md:justify-start items-center gap-8 w-full">

                        <div className="flex items-center ">
                            <input
                                id="AgendarReunion"
                                type="radio"
                                value="Agendar Reunion"
                                name="motivo"
                                className="w-4 h-4 "
                            />
                            <label
                                for="AgendarReunion"
                                className="ms-2 text-base xl:text-lg font-medium text-black"
                            >Agenda una reunión
                            </label>

                        </div>

                        <div className="flex items-center justify-center ">
                            <input
                                id="ObtenerPropuesta"
                                type="radio"
                                value="Obtener Propuesta"
                                name="motivo"
                                className="w-4 h-4 "
                            />
                            <label
                                for="ObtenerPropuesta"
                                className="ms-2 text-base xl:text-lg font-medium text-black"
                            >Obtene tu propuesta
                            </label>
                        </div>

                    </div> */}
                    <div>
                        <label
                            for="nombre"
                            className="block mb-2 text-base font-medium text-black"
                        >Nombre
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            className="shadow-sm bg-white border border-violeta-200 text-black text-base rounded-lg block w-full p-2.5 outline-none focus:border-2 focus:border-violeta-100 caret-violeta-100"
                            placeholder="Juan Perez"
                            name="nombre"
                            required
                        />
                    </div>

                    <div>
                        <label
                            for="telefono"
                            className="block mb-2 text-base font-medium text-black"
                        >Telefono
                        </label>
                        <input
                            type="number"
                            id="telefono"
                            className="shadow-sm bg-white border border-violeta-200 text-black text-base rounded-lg block w-full p-2.5 outline-none focus:border-2 focus:border-violeta-100 caret-violeta-100"
                            placeholder="(011) 1234-5678"
                            name="telefono"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="email"
                            className="block mb-2 text-base font-medium text-black"
                        >Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow-sm bg-white border border-violeta-200 text-black text-base rounded-lg block w-full p-2.5 outline-none focus:border-2 focus:border-violeta-100 caret-violeta-100"
                            placeholder="juanperez@tumail.com"
                            name="email"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            for="mensaje"
                            className="block mb-2 text-base font-medium text-black"
                        >Dejanos tu consulta
                        </label>
                        <textarea
                            id="mensaje"
                            rows={6}
                            className="shadow-sm bg-white border border-violeta-200 text-black text-base rounded-lg block w-full p-2.5 outline-none focus:border-2 focus:border-violeta-100 caret-violeta-100"
                            placeholder="Quiero coordinar una reunión"
                            name="mensaje"
                        ></textarea>
                    </div>
                    <div className="w-full grid place-items-center">
                        <button class="cssbuttons-io-button w-[90%] lg:w-[65%] xl:w-[50%] ">
                            <h2 class="text-center font-semibold text-lg lg:text-xl leading-7">Enviar Consulta</h2>

                            <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail-fast"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7h3" /><path d="M3 11h2" /><path d="M9.02 8.801l-.6 6a2 2 0 0 0 1.99 2.199h7.98a2 2 0 0 0 1.99 -1.801l.6 -6a2 2 0 0 0 -1.99 -2.199h-7.98a2 2 0 0 0 -1.99 1.801z" /><path d="M9.8 7.5l2.982 3.28a3 3 0 0 0 4.238 .202l3.28 -2.982" /></svg>
                            </div>
                        </button>
                    </div>


                </form>
            </div>
            <div className="hidden lg:block lg:w-4/12">
                <img
                    className="absolute -top-10 -right-20 w-[750px] 2xl:w-[850px] 2xl:-top-32 2xl:right-14"
                    src="./clients/correoConLinea.avif"
                    alt="c"
                />
            </div>
        </div>
    )
}

export default FormContacto