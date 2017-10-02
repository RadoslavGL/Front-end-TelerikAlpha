const commandsFunc = function (modelFactory, dataBase){
    'use strict'
    const createTicketCommand = {
        get name() {
            return 'createticket'
        },
        execute: (parameters) => {

            const journeyID = parameters[0]
            const journey = dataBase.journeys[journeyID]       
            
            const ticket = modelFactory.createTicketCommand(journey)
            dataBase.tickets.push(ticket)

            return `Ticket with ID ${dataBase.tickets.length - 1} was created.`
        }
    }

    const createJourneyCommand = {
        get name() {
            return 'createjourney'
        },
        execute: (parameters) => {

            const startingLocation = parameters[0]
            const destination = parameters[1]
            const distance = +parameters[2]

            const journey = modelFactory.createJourney(startingLocation, destination, distance)
            dataBase.journeys.push(journey)

            return `Journey with ID ${dataBase.journeys.length - 1} was created.`
        }
    }

    const listJourneysCommand = {
        get name() {
            return 'listjourney'
        },
        execute : (parameters) => {
            return dataBase.journeys.length ? dataBase.journeys.join('<br />') : 'No journeys added!'
        }
    }

    return [createTicketCommand, createJourneyCommand, listJourneysCommand]
}