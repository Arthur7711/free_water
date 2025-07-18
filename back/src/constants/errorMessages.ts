export const errorMessages = {
    serverError: "Server error",
    notFound(type: "Location") {
        return `${type} not found`;
    },
    invalidToken: "Token is not valid",
    locationRemoved: "Location removed",
};