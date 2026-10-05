"use client";

import { useState } from "react";
import { EventCalendar } from "@mui/x-scheduler/event-calendar";
import { ptBR as schedulerPtBR } from "@mui/x-scheduler/locales";
import { ptBR as dateFnsPtBR } from "date-fns/locale/pt-BR";

const initialEvents = [
    {
        id: 1,
        title: "Team Meeting",
        start: "2024-01-15T10:00:00",
        end: "2024-01-15T11:00:00",
    },
    {
        id: 2,
        title: "Project Review",
        start: "2024-01-16T14:00:00",
        end: "2024-01-16T15:30:00",
    },
    {
        id: 3,
        title: "Client Call",
        start: "2024-01-17T09:00:00",
        end: "2024-01-17T10:00:00",
    },
];

export default function Calendario() {
    const [events, setEvents] = useState(initialEvents);

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