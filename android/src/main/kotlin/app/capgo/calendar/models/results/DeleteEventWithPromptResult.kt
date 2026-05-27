package app.capgo.calendar.models.results

import com.getcapacitor.JSObject
import app.capgo.calendar.models.templates.JSResult

data class DeleteEventWithPromptResult(
    private val deleted: Boolean,
) : JSResult {
    override fun toJSON(): JSObject {
        val result = JSObject()
        result.put("deleted", deleted)
        return result
    }
}
