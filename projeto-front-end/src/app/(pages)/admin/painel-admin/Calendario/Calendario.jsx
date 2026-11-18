"use client";

import { useState, useEffect } from "react";
import { EventCalendar } from "@mui/x-scheduler/event-calendar";
import { ptBR as schedulerPtBR } from "@mui/x-scheduler/locales";
import { ptBR as dateFnsPtBR } from "date-fns/locale/pt-BR";
import axios from "axios";

const initialEvents = [
    {
        id: 1,
        title: "Apresentação do Projeto",
        start: "2026-10-13T19:00:00",
        end: "2026-10-13T22:00:00",
        backgroundColor: "#3b5bdb",
        borderColor: "#3b5bdb",
        textColor: "#fff",
        allDay: true
    },
];


export default function Calendario() {

    const [events, setEvents] = useState();
    const [erro, setErro] = useState("");

    useEffect(() => {

        async function buscarEventos() {
            try {
                const resposta = await axios.get(
                    "http://localhost:8000/api/eventos"
                );

                const initialEvents = resposta.data.map((evento) => ({
                    id: evento.eveId,
                    title: evento.eveTitulo,
                    start: evento.eveDtInicio.replace(" ", "T"),
                    end: evento.eveDtTermino.replace(" ", "T"),
                    color: evento.eveCorBackground,
                    borderColor: evento.eveCorBorda,
                    textColor: evento.eveCorTexto,
                    description: evento.eveDescricao,
                    allDay: evento.eveDiaTodo
                }));
                
                setEvents(initialEvents);
                setErro("");
            } catch (erro) {
                console.error("Erro ao buscar eventos:", erro);
                setErro("Erro os eventos.");
            } finally {

            }
        }

        buscarEventos();

    }, []);
    

    return (
        <div style={{ height: 600, width: "100%" }}>
            <EventCalendar
                events={events}
                onEventsChange={setEvents}
                defaultVisibleDate={new Date()}
                views={["month"]}
                defaultView="month"
                preferencesMenuConfig={false}
                localeText={
                    schedulerPtBR.components.MuiEventCalendar.defaultProps.localeText
                }
                dateLocale={dateFnsPtBR}
                displayTimezone="America/Sao_Paulo"
                defaultPreferences={{
                    ampm: false,
                    weekStartsOn: 1,
                }}
            />
        </div>
    );
}