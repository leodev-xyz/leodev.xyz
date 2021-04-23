
dump = (object, dept, seen) ->
    return if seen[object]
    seen[object] = true
    for key, value of object
        type = typeof value

        Cheat.Print "  ".repeat(dept) + "- " + key + " (" + type + ")"
        if type == "object"
            Cheat.Print ":\n"
            dump value, dept + 1
        else if type == "function"
            Cheat.Print " " + value.length + " arguments\n"
        else
            Cheat.Print "\n"

dump this, 0, {}