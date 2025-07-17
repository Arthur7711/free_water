export const errorMessages = {
    serverError: "Server error",
    notFound(type: "Location") {
        return `${type} not found`;
    },
    locationRemoved: "Location removed",
};