"use client";

import { useState, useEffect } from "react";
import { EventCalendar } from "@mui/x-scheduler/event-calendar";
import { ptBR as schedulerPtBR } from "@mui/x-scheduler/locales";
import { ptBR as dateFnsPtBR } from "date-fns/locale/pt-BR";
import axios from "axios";

export default function Calendario() {

    const [events, setEvents] = useState([]);
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
                    start: evento.eveDtInicio,
                    end: evento.eveDtTermino,
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