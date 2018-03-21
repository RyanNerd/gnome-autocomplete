// @see https://people.gnome.org/~gcampagna/docs/GLib-2.0/
// @see https://devdocs.baznga.org/
// @see https://lazka.github.io/pgi-docs/GLib-2.0/enums.html
// https://www.roojs.org/seed/gir-1.2-gtk-3.0/seed/GLib.KeyFileFlags.html

export class GLib
{
    /**
     * A wrapper for the POSIX access() function.
     * This function is used to test a pathname for one or several of read, write or execute permissions, or just existence.
     * @see http://pubs.opengroup.org/onlinepubs/009695299/functions/access.html
     * @see https://gist.github.com/duckinator/278652
     * @param {string} filename Pathname in the GLib file name encoding
     * @param {GLib.AccessMode} mode
     * @return {int} Zero if the pathname refers to an existing file system object that has all the tested permissions,
     *               or -1 otherwise or on error.
     */
    public static access(filename, mode)
    {
    }

    public static AccessMode =
        {
            F_OK: 0,
            X_OK: 1,
            W_OK: 2,
            R_OK: 4
        };

    /**
     * Determines the numeric value of a character as a decimal digit.
     * Differs from GLib.unichar_digit_value because it takes a char, so there's no worry about sign extension if characters are signed.
     * @see https://devdocs.baznga.org/glib20~2.50.0/glib.ascii_digit_value
     * @param {number} c an ASCII character
     * @return {number} If c is a decimal digit (according to g_ascii_isdigit()), its numeric value. Otherwise, -1.
     */
    public static ascii_digit_value(c)
    {
    }

    /**
     * Converts a #gdouble to a string, using the '.' as decimal point.
     * This function generates enough precision that converting the string back using GLib.ascii_strtod gives the same machine-number (on machines with IEEE compatible 64bit doubles). It is guaranteed that the size of the resulting string will never be larger than @G_ASCII_DTOSTR_BUF_SIZE bytes.
     * @see https://devdocs.baznga.org/glib20~2.50.0/glib.ascii_dtostr
     * @param {string} buffer A buffer to place the resulting string in.
     * @param {int} buf_len The length of the buffer.
     * @param {number} d The #gdouble to convert.
     * @Return {string} The pointer to the buffer with the converted string.
     */
    public static ascii_dtostr(buffer, buf_len, d)
    {
    }

    /**
     * Converts a #gdouble to a string, using the '.' as decimal point.
     * To format the number you pass in a printf()-style format string.
     * Allowed conversion specifiers are 'e', 'E', 'f', 'F', 'g' and 'G'.
     * If you just want to want to serialize the value into a string, use GLib.ascii_dtostr.
     * @see https://devdocs.bqqaznga.org/glib20~2.50.0/glib.ascii_formatd
     * @param {string} buffer A buffer to place the resulting string in
     * @param {int} buf_len Length of the buffer
     * @param {string} format The printf()-style format to use for the code to use for converting.
     * @param {number} d The #gdouble to convert
     * @return {string} The pointer to the buffer with the converted string.
     */
    public static ascii_formatd(buffer, buf_len, format, d)
    {
    }

    /**
     * Compare two strings, ignoring the case of ASCII characters.
     * Unlike the BSD strcasecmp() function, this only recognizes standard ASCII letters and ignores the locale, treating all non-ASCII bytes as if they are not letters.
     * This function should be used only on strings that are known to be in encodings where the bytes corresponding to ASCII letters always represent themselves. This includes UTF-8 and the ISO-8859-* charsets, but not for instance double-byte encodings like the Windows Codepage 932, where the trailing bytes of double-byte characters include all ASCII letters. If you compare two CP932 strings using this function, you will get false matches.
     * Both s1 and s2 must be non-null.
     * @see https://devdocs.baznga.org/glib20~2.50.0/glib.ascii_strcasecmp
     * @param {string} s1 string to compare with s2
     * @param {string} s2 string to compare with s1
     * @return {int} 0 if the strings match, a negative value if s1 < s2, or a positive value if s1 > s2.
     */
    public static ascii_strcasecmp(s1, s2)
    {
    }

    /**
     * Converts all upper case ASCII letters to lower case ASCII letters.
     * @see https://devdocs.baznga.org/glib20~2.50.0/glib.ascii_strdown
     * @param {string} str A string
     * @param {int} len Length of str in bytes, or -1 if str is nul-terminated
     * @return {string} a newly-allocated string, with all the upper case characters in str converted to lower case, with semantics that exactly match GLib.ascii_tolower.
     * (Note that this is unlike the old GLib.strdown, which modified the string in place.)
     */
    public static ascii_strdown(str, len)
    {
    }

    /**
     * Compare s1 and s2, ignoring the case of ASCII characters and any characters after the first n in each string.
     * Unlike the BSD strcasecmp() function, this only recognizes standard ASCII letters and ignores the locale, treating all non-ASCII characters as if they are not letters.
     * The same warning as in GLib.ascii_strcasecmp applies: Use this function only on strings known to be in encodings where bytes corresponding to ASCII letters always represent themselves.
     * @see https://devdocs.baznga.org/glib20~2.50.0/glib.ascii_strncasecmp
     * @param {string} s1 String to compare with s2
     * @param {string} s2 String to compare with s1
     * @param {int} n Number of characters to compare
     * @return {int} 0 if the strings match, a negative value if s1 < s2, or a positive value if s1 > s2.
     */
    public static ascii_strncasecmp(s1, s2, n)
    {
    }

    /**
     * Converts a string to a #gdouble value.
     * This function behaves like the standard strtod() function does in the C locale.
     * It does this without actually changing the current locale, since that would not be thread-safe.
     * A limitation of the implementation is that this function will still accept localized versions of infinities and NANs.
     * This function is typically used when reading configuration files,
     * or other non-user input that should be locale independent.
     * To handle input from the user you should normally use the locale-sensitive system strtod() function.
     * To convert from a #gdouble to a string in a locale-insensitive way, use GLib.ascii_dtostr.
     * If the correct value would cause overflow, plus or minus %HUGE_VAL is returned (according to the sign of the value),
     * and %ERANGE is stored in %errno.
     * If the correct value would cause underflow, zero is returned and %ERANGE is stored in %errno.
     * This function resets %errno before calling strtod() so that you can reliably detect overflow and underflow.
     * @see https://devdocs.baznga.org/glib20~2.50.0/glib.ascii_strtod
     * @param {string} nptr The string to convert to a numeric value.
     * @param {string || null} endptr If non-null, it returns the character after the last character used in the conversion.
     * @return {number} The #gdouble value.
     */
    public static ascii_strtod(nptr, endptr)
    {
    }

    /**
     * Converts a string to a #gint64 value.
     * This function behaves like the standard strtoll() function does in the C locale.
     * It does this without actually changing the current locale, since that would not be thread-safe.
     * @see https://devdocs.baznga.org/glib20~2.50.0/glib.ascii_strtoll
     * @param {string} nptr The string to convert to a numeric value.
     * @param {number} base To be used for the conversion, 2..36 or 0
     * @return {number} the #gint64 value or zero on error.
     * @return {string} if non-null, it returns the character after the last character used in the conversion.
     */
    public static ascii_strtoll(nptr, base)
    {
    }

    /**
     * Converts a string to a #guint64 value.
     * This function behaves like the standard strtoull() function does in the C locale.
     * It does this without actually changing the current locale, since that would not be thread-safe.
     * @see https://devdocs.baznga.org/glib20~2.50.0/glib.ascii_strtoull
     * @param {string} nptr the string to convert to a numeric value.
     * @param {string} base to be used for the conversion, 2..36 or 0
     * @return {int} The #guint64 value or zero on error.
     * @return {string} if non-null, it returns the character after the last character used in the conversion.
     */
    public static ascii_strtoull(nptr, base)
    {
    }

    /**
     * Converts all lower case ASCII letters to upper case ASCII letters.
     * @see https://devdocs.baznga.org/glib20~2.50.0/glib.ascii_strup
     * @param {string} str A string
     * @param {int} len Length of str in bytes, or -1 if str is nul-terminated
     * @return {string} A newly allocated string, with all the lower case characters in str converted to upper case,
     *                  with semantics that exactly match GLib.ascii_toupper.
     *                  (Note that this is unlike the old GLib.strup, which modified the string in place.)
     */
    public static ascii_strup(str, len)
    {
    }

    /**
     * Convert a character to ASCII lower case.
     * Unlike the standard C library tolower() function, this only recognizes standard ASCII letters and ignores the locale,
     * returning all non-ASCII characters unchanged, even if they are lower case letters in a particular character set.
     * Also unlike the standard library function, this takes and returns a char, not an int,
     * so don't call it on %EOF but no need to worry about casting to #guchar before passing a possibly non-ASCII character in.
     * @see https://devdocs.baznga.org/glib20~2.50.0/glib.ascii_tolower
     * @param {int} c Any character
     * @return {int} The result of converting c to lower case. If c is not an ASCII upper case letter, c is returned unchanged.
     */
    public static ascii_tolower(c)
    {
    }

    /**
     * Convert a character to ASCII upper case.
     * Unlike the standard C library toupper() function, this only recognizes standard ASCII letters and ignores the locale,
     * returning all non-ASCII characters unchanged, even if they are upper case letters in a particular character set.
     * Also unlike the standard library function, this takes and returns a char, not an int,
     * so don't call it on %EOF but no need to worry about casting to #guchar before passing a possibly non-ASCII character in.
     * @see https://devdocs.baznga.org/glib20~2.50.0/glib.ascii_toupper
     * @param {int} c
     * @return {int}
     */
    public static ascii_toupper(c)
    {
    }

    /**
     * Determines the numeric value of a character as a hexidecimal digit.
     * Differs from GLib.unichar_xdigit_value because it takes a char,
     * so there's no worry about sign extension if characters are signed.
     * @see https://devdocs.baznga.org/glib20~2.50.0/glib.ascii_xdigit_value
     * @param {number} c An ASCII character.
     * @return {number} If c is a hex digit (according to g_ascii_isxdigit()), its numeric value. Otherwise, -1.
     */
    public static ascii_xdigit_value(c)
    {
    }

    /**
     * @see https://devdocs.baznga.org/glib20~2.50.0/glib.assertion_message
     * @param {string} domain
     * @param {string} file
     * @param {number} line
     * @param {string} func
     * @param {string} message`
     */
    public static assertion_message(domain, file, line, func, message)
    {
    }

    /**
     * @see https://devdocs.baznga.org/glib20~2.50.0/glib.assertion_message_cmpstr
     * @param {string} domain
     * @param {string} file
     * @param {number} line
     * @param {string) func
     * @param {string} expr
     * @param {string} arg1
     * @param {string} cmp
     * @param {string} arg2
     */
    public static assertion_message_cmpstr(domain, file, line, func, expr, arg1, cmp, arg2)
    {
    }

    /**
     * @see https://devdocs.baznga.org/glib20~2.50.0/glib.assertion_message_error
     * @param {string} domain
     * @param {string} file
     * @param {number} line
     * @param {string) func
     * @param {string} expr
     * @param {GLib.Error} error
     * @param {GLib.Quark} error_domain
     * @param {number} error_code
     */
    public static assertion_message_error(domain, file, line, func, expr, error, error_domain, error_code)
    {
    }

    /**
     * @see https://devdocs.baznga.org/glib20~2.50.0/glib.assert_warning
     * @param {string} log_domain
     * @param {string} file
     * @param {number} line
     * @param {string} pretty_function
     * @param {string} expression`
     */
    public static assertion_warning(log_domain, file, line, pretty_function, expression)
    {
    }

    /**
     * Atomically adds val to the value of atomic.
     * Think of this operation as an atomic version of { tmp = *atomic; *atomic += val; return tmp; }.
     * This call acts as a full compiler and hardware memory barrier.
     * Before version 2.30, this function did not return a value (but GLib.atomic_int_exchange_and_add did,
     * and had the same meaning).
     * @see https://devdocs.baznga.org/glib20~2.50.0/glib.atomic_int_add
     * @param {number} atormic A pointer to a #gint or #guint
     * @param {int} val The value to add
     * @return {int} The value of atomic before the add, signed
     */
    public static atomic_int_add(atormic, val)
    {
    }

    /**
     * Performs an atomic bitwise 'and' of the value of atomic and val, storing the result back in atomic.
     * This call acts as a full compiler and hardware memory barrier.
     * Think of this operation as an atomic version of { tmp = *atomic; *atomic &amp;= val; return tmp; }.
     * @see https://devdocs.baznga.org/glib20~2.50.0/glib.atomic_int_and
     * @param {number} atomic A pointer to a #gint or #guint
     * @param {number} val The value to add
     * @return {number} The value of atomic before the add, signed
     */
    public static atomic_int_and(atomic, val)
    {
    }

    /**
     * Compares atomic to oldval and, if equal, sets it to newval. If atomic was not equal to oldval then no change occurs.
     * This compare and exchange is done atomically.
     * Think of this operation as an atomic version of { if (*atomic == oldval) { *atomic = newval; return TRUE; } else return FALSE; }.
     * This call acts as a full compiler and hardware memory barrier.
     * @param {number} atomic A pointer to a #gint or #guint
     * @param {int} oldval The value to compare with
     * @param {int} newval The value to conditionally replace with
     * @return {boolean} true if the exchange took place
     */
    public static atomic_int_compare_and_exchange(atomic, oldval, newval)
    {
    }

    /**
     * Decrements the value of atomic by 1.
     * Think of this operation as an atomic version of { *atomic -= 1; return (*atomic == 0); }.
     * This call acts as a full compiler and hardware memory barrier.
     * @param {number} atomic A pointer to a #gint or #guint
     * @return {boolean} true if the resultant value is zero
     */
    public static atomic_int_dec_and_test(atomic)
    {
    }

    /**
     * Gets the current value of atomic.
     * This call acts as a full compiler and hardware memory barrier (before the get).
     * @param {number} atomic
     * @return {int}
     */
    public static atomic_int_get(atomic)
    {
    }

    /**
     * Increments the value of atomic by 1.
     * Think of this operation as an atomic version of { *atomic += 1; }.
     * This call acts as a full compiler and hardware memory barrier.
     * @param {number} atomic
     * @return {void}
     */
    public static atomic_int_inc(atomic)
    {
    }

    /**
     * Performs an atomic bitwise 'or' of the value of atomic and val, storing the result back in atomic.
     * Think of this operation as an atomic version of { tmp = *atomic; *atomic |= val; return tmp; }.
     * This call acts as a full compiler and hardware memory barrier.
     * @param {number} atomic A pointer to a #gint or #guint
     * @param {int} val The value to 'or'
     */
    public static atomic_int_or(atomic, val)
    {
    }

    /**
     * Sets the value of atomic to newval.
     * This call acts as a full compiler and hardware memory barrier (after the set).
     * @param atomic A pointer to a #gint or #guint
     * @param newval A new value to store
     */
    public static atomic_int_set(atomic, newval)
    {
    }

    /**
     * Performs an atomic bitwise 'xor' of the value of atomic and val, storing the result back in atomic.
     * Think of this operation as an atomic version of { tmp = *atomic; *atomic |= val; return tmp; }.
     * This call acts as a full compiler and hardware memory barrier.
     * @param {number} atomic A pointer to a #gint or #guint
     * @param {int} val The value to 'xor'
     */
    public static atomic_int_xor(atomic, val)
    {
    }

    /**
     * Atomically adds val to the value of atomic.
     * Think of this operation as an atomic version of { tmp = *atomic; *atomic += val; return tmp; }.
     * This call acts as a full compiler and hardware memory barrier.
     * @param {number} atomic A pointer to a #gpointer-sized value
     * @param {int} val The value to add
     */
    public static atomic_pointer_add(atomic, val)
    {
    }


    /**
     * Performs an atomic bitwise 'and' of the value of atomic and val, storing the result back in atomic.
     * Think of this operation as an atomic version of { tmp = *atomic; *atomic &amp;= val; return tmp; }.
     * This call acts as a full compiler and hardware memory barrier.
     * @see https://devdocs.baznga.org/glib20~2.50.0/glib.atomic_pointer_and
     * @param {number} atormic a pointer to a #gpointer-sized value
     * @param {int} val The value to `add`
     * @return {int} The value of atomic before the add, signed
     */
    public static atomic_pointer_and(atormic, val)
    {
    }

    /**
     * Compares atomic to oldval and, if equal, sets it to newval. If atomic was not equal to oldval then no change occurs.
     * This compare and exchange is done atomically.
     * Think of this operation as an atomic version of { if (*atomic == oldval) { *atomic = newval; return TRUE; } else return FALSE; }.
     * @param {number} atomic a pointer to a #gpointer-sized value
     * @param {int} oldval the value to compare with
     * @param {int} newval the value to conditionally replace with
     * @return {boolean} true if the exchange took place
     */
    public static atomic_pointer_compare_and_exchange(atomic, oldval, newval)
    {
    }

    /**
     * Gets the current value of atomic.
     * @param atomic a pointer to a #gpointer-sized value
     * @return {void}
     */
    public static atomic_pointer_get(atomic)
    {
    }

    /**
     * Performs an atomic bitwise 'or' of the value of atomic and val, storing the result back in atomic.
     * Think of this operation as an atomic version of { tmp = *atomic; *atomic |= val; return tmp; }.
     * This call acts as a full compiler and hardware memory barrier.
     * @param {number} atomic a pointer to a #gpointer-sized value
     * @param {int} val  the value to 'or'
     */
    public static atomic_pointer_or(atomic, val)
    {
    }

    /**
     * Sets the value of atomic to newval.
     * This call acts as a full compiler and hardware memory barrier (after the set).
     * @param atomic a pointer to a #gpointer-sized value
     * @param newval a new value to store
     * @return {void}
     */
    public static atomic_pointer_set(atomic, newval)
    {
    }

    /**
     * Performs an atomic bitwise 'xor' of the value of atomic and val, storing the result back in atomic.
     * Think of this operation as an atomic version of { tmp = *atomic; *atomic ^= val; return tmp; }.
     * This call acts as a full compiler and hardware memory barrier.
     * @param atomic a pointer to a #gpointer-sized value
     * @param val the value to 'xor'
     */
    public static atomic_pointer_xor(atomic, val)
    {
    }

    /**
     * Decode a sequence of Base-64 encoded text into binary data. Note that the returned binary data is not necessarily zero-terminated, so it should not be used as a character string.
     * @param {string} text
     * @return {array} [return_value: ByteArray, out_len: Number(gsize)]
     */
    public static base64_decode(text)
    {
    }

    /**
     * Decode a sequence of Base-64 encoded text into binary data by overwriting the input data
     * @param {ByteArray} text zero-terminated string with base64 text to decode
     * @return {array} [return_value: Number, text: ByteArray]
     */
    public static base64_decode_inplace(text)
    {
    }

    /**
     * Incrementally decode a sequence of binary data from its Base-64 stringified representation. By calling this function multiple times you can convert data in chunks to avoid having to have the full encoded data in memory.
     * The output buffer must be large enough to fit all the data that will be written to it. Since base64 encodes 3 bytes in 4 chars you need at least: (len / 4) * 3 + 3 bytes (+ 3 may be needed in case of non-zero state).
     * @param {ByteArray} _in binary input data
     * @param {number} state Saved state between steps, initialize to 0
     * @param {number} save Saved state between steps, initialize to 0
     * @return {array} [return_value: Number, Out: ByteArray, state: Number, save: Number]
     */
    public static base64_decode_step(_in, state, save)
    {
    }

    /**
     * Encode a sequence of binary data into its Base-64 stringified representation.
     * @param {ByteArray} data the binary data to encode
     * @return {string} a newly allocated, zero-terminated Base-64 encoded string representing data. The returned string must be freed with GLib.free.
     */
    public static base64_encode(data)
    {
    }

    /**
     * Flush the status from a sequence of calls to GLib.base64_encode_step.
     * The output buffer must be large enough to fit all the data that will be written to it. It will need up to 4 bytes, or up to 5 bytes if line-breaking is enabled.
     * @param {boolean} break_lines whether to break long lines
     * @param {number} state Saved state from GLib.base64_encode_step
     * @param {number} save Saved state from GLib.base64_encode_step
     * @return {array} [return_value (Number) — The number of bytes of output that was written,
     *                  out (ByteArray) — pointer to destination buffer,
     *                  state (Number) — Saved state from GLib.base64_encode_step,
     *                  save (Number) — Saved state from GLib.base64_encode_step]
     */
    public static base64_encode_close(break_lines, state, save)
    {
    }

    /**
     * Incrementally encode a sequence of binary data into its Base-64 stringified representation. By calling this function multiple times you can convert data in chunks to avoid having to have the full encoded data in memory.
     * When all of the data has been converted you must call GLib.base64_encode_close to flush the saved state.
     * The output buffer must be large enough to fit all the data that will be written to it. Due to the way base64 encodes you will need at least: (len / 3 + 1) * 4 + 4 bytes (+ 4 may be needed in case of non-zero state). If you enable line-breaking you will need at least: ((len / 3 + 1) * 4 + 4) / 72 + 1 bytes of extra space.
     * break_lines is typically used when putting base64-encoded data in emails. It breaks the lines at 72 columns instead of putting all of the text on the same line. This avoids problems with long lines in the email system. Note however that it breaks the lines with LF characters, not CR LF sequences, so the result cannot be passed directly to SMTP or certain other protocols.
     * @param {ByteArray} _in
     * @param {boolean} break_lines
     * @param {number} state
     * @param {number} save
     * @return {array} [return_value (Number) — The number of bytes of output that was written out (ByteArray) — pointer to destination buffer,
     *                  state (Number) — Saved state between steps, initialize to 0,
     *                  save (Number) — Saved state between steps, initialize to 0]
     */
    public static base64_encode_step(_in, break_lines, state, save)
    {
    }

    /**
     * @summary not included from bazinga
     * Gets the name of the file without any leading directory components. It returns a pointer into the given file name string.
     * @param {string} file_name The name of the file
     * @return {string} The name of the file without any leading directory components
     */
    public static basename(file_name)
    {
    }

    /**
     * Sets the indicated lock_bit in address. If the bit is already set, this call will block until GLib.bit_unlock unsets the corresponding bit.
     * Attempting to lock on two different bits within the same integer is not supported and will very probably cause deadlocks.
     * The value of the bit that is set is (1u << @bit). If @bit is not between 0 and 31 then the result is undefined.
     * This function accesses address atomically. All other accesses to address must be atomic in order for this function to work reliably.
     * @param {number} address A pointer to an integer
     * @param {int} lock_bit A bit value between 0 and 31
     * @return {void}
     */
    public static bit_lock(address, lock_bit)
    {
    }

    /**
     * Find the position of the first bit set in mask, searching from (but not including) nth_bit upwards.
     * Bits are numbered from 0 (least significant) to sizeof(#gulong) * 8 - 1 (31 or 63, usually).
     * To start searching from the 0th bit, set nth_bit to -1.
     * @param {number} mask A #gulong containing flags
     * @param {int} nth_bit The index of the bit to start the search from
     * @returns {int} The index of the first bit set which is higher than nth_bit, or -1 if no higher bits are set
     */
    public static bit_nth_lsf(mask, nth_bit)
    {
    }

    /**
     * Find the position of the first bit set in mask, searching from (but not including) nth_bit downwards.
     * Bits are numbered from 0 (least significant) to sizeof(#gulong) * 8 - 1 (31 or 63, usually).
     * To start searching from the last bit, set nth_bit to -1 or GLIB_SIZEOF_LONG * 8.
     * @param {number} mask A #gulong containing flags
     * @param {int} nth_bit the index of the bit to start the search from
     * @return {int} The index of the first bit set which is lower than nth_bit, or -1 if no lower bits are set
     */
    public static bit_nth_msf(mask, nth_bit)
    {
    }

    /**
     * Gets the number of bits used to hold number, e.g. if number is 4, 3 bits are needed.
     * @param {int} number A #guint
     * @return {int} the number of bits used to hold number
     */
    public static bit_storage(number)
    {
    }

    /**
     * Sets the indicated lock_bit in address, returning true if successful. If the bit is already set, returns false immediately.
     * Attempting to lock on two different bits within the same integer is not supported.
     * The value of the bit that is set is (1u << @bit). If @bit is not between 0 and 31 then the result is undefined.
     * This function accesses address atomically. All other accesses to address must be atomic in order for this function to work reliably.
     * @param {number} address A pointer to an integer
     * @param {int} lock_bit A bit value between 0 and 31
     */
    public static bit_trylock(address, lock_bit)
    {
    }

    /**
     * Clears the indicated lock_bit in address. If another thread is currently blocked in GLib.bit_lock on this same bit then it will be woken up.
     * This function accesses address atomically. All other accesses to address must be atomic in order for this function to work reliably.
     * @param {number} address A pointer to an integer
     * @param {int} lock_bit a bit value between 0 and 31
     * @return {void}
     */
    public static bit_unlock(address, lock_bit)
    {
    }

    /**
     * Behaves exactly like index.build_filename, but takes the path elements as a string array, instead of varargs. This function is mainly meant for language bindings.
     * @param {array<string>} strings null-terminated array of strings containing the path elements.
     * @string a newly-allocated string that must be freed with GLib.free.
     */
    public static build_filenamev(strings)
    {
    }

    /**
     * Behaves exactly like index.build_path, but takes the path elements as a string array, instead of varargs. This function is mainly meant for language bindings.
     * @param {string} separator a string used to separator the elements of the path.
     * @param {array<string>} args null-terminated array of strings containing the path elements.
     * @return {string} a newly-allocated string that must be freed with GLib.free.
     */
    public static build_pathv(separator, args)
    {
    }

    /**
     * A wrapper for the POSIX chdir() function. The function changes the current directory of the process to path.
     * @param {string} path A pathname in the GLib file name encoding
     * @return {int} 0 on success, -1 if an error occurred.
     */
    public static chdir(path)
    {
    }

    /**
     * Checks that the GLib library in use is compatible with the given version. Generally you would pass in the constants
     * GLIB_MAJOR_VERSION, #GLIB_MINOR_VERSION, #GLIB_MICRO_VERSION
     * as the three arguments to this function; that produces a check that the library in use is compatible with the version of GLib the application or module was compiled against.
     * Compatibility is defined by two things: first the version of the running library is newer than the version required_major.required_minor.required_micro. Second the running library must be binary compatible with the version required_major.required_minor.required_micro (same major version.)
     * @param {number} required_major
     * @param {number} required_minor
     * @param {number} required_micro
     * @return {string|null} null if the GLib library is compatible with the given version, or a string describing the version mismatch. The returned string is owned by GLib and must not be modified or freed.
     */
    public static check_version(required_major, required_minor, required_micro)
    {
    }

    /**
     * Sets a function to be called when the child indicated by pid exits, at the priority priority.
     * If you obtain pid from GLib.spawn_async or GLib.spawn_async_with_pipes you will need to pass #G_SPAWN_DO_NOT_REAP_CHILD as flag to the spawn function for the child watching to work.
     * In many programs, you will want to call GLib.spawn_check_exit_status in the callback to determine whether or not the child exited successfully.
     * Also, note that on platforms where GLib.Pid must be explicitly closed (see GLib.spawn_close_pid) pid must not be closed while the source is still active. Typically, you should invoke GLib.spawn_close_pid in the callback function for the source.
     * GLib supports only a single callback per process id.
     * This internally creates a main loop source using GLib.child_watch_source_new and attaches it to the main loop context using GLib.Source.attach. You can do these steps manually if you need greater control.
     * @param {number} priority The priority of the idle source. Typically this will be in the range between #G_PRIORITY_DEFAULT_IDLE and #G_PRIORITY_HIGH_IDLE.
     * @param {GLib.Pid} pid process to watch. On POSIX the positive pid of a child process.
     * @param {GLib.ChildWatchFunc} _function function to call
     */
    public static child_watch_add(priority, pid, _function)
    {
    }


    /**
     * Creates a new child_watch source.
     * The source will not initially be associated with any GLib.MainContext and must be added to one with GLib.Source.attach before it will be executed.
     * Note that child watch sources can only be used in conjunction with g_spawn... when the GLib.SpawnFlags.DO_NOT_REAP_CHILD flag is used.
     * Note that on platforms where GLib.Pid must be explicitly closed (see GLib.spawn_close_pid) pid must not be closed while the source is still active. Typically, you will want to call GLib.spawn_close_pid in the callback function for the source.
     * Note further that using GLib.child_watch_source_new is not compatible with calling waitpid with a nonpositive first argument in the application. Calling waitpid() for individual pids will still work fine.
     * Similarly, on POSIX platforms, the pid passed to this function must be greater than 0 (i.e. this function must wait for a specific child, and cannot wait for one of many children by using a nonpositive argument).
     * @param {GLib.Pid} pid Process to watch. On POSIX the positive pid of a child process.
     * @return {GLib.Source} The newly-created child watch source
     */
    public static child_watch_source_new(pid)
    {
    }

    /**
     * If @err is null, does nothing. If @err is non-null, calls GLib.Error.prototype.free on *@err and sets *@err to null.
     * @return {void}
     */
    public static clear_error()
    {
    }

    /**
     * This wraps the close() call; in case of error, %errno will be preserved, but the error will also be stored as a GLib.Error in @error.
     * Besides using GLib.Error, there is another major reason to prefer this function over the call provided by the system; on Unix, it will attempt to correctly handle %EINTR, which has platform-specific semantics.
     * @param {number} fd A file descriptor
     * @return {boolean} true on success, false if there was an error.
     * @throws {exception}
     */
    public static close(fd)
    {
    }

    /**
     * Returns the value of the environment variable variable in the provided list envp.
     * @param {string} envp - string result from get_environ() or other key=value,... lists
     * @param {string} variable - The environment variable to get.
     * @return {string | null} The value of the environment variable, or null if the environment variable is not set in envp.
     * @example GLib.environ_getenv(GLib.get_environ(), 'XDG_SESSION_PATH');
     * Note: this could also be used to parse simple INI string and values.
     */
    public static environ_getenv(envp, variable)
    {
    }

    /**
     * Sets the environment variable variable in the provided list envp to value.
     * @rating 7/10
     * @param {string} envp String from GLib.get_environ()
     * @param {string} variable The environment variable to set, must not contain '='
     * @param {string} value The value for to set the variable to
     * @param {boolean} overwrite Whether to change the variable if it already exists
     * @return {string} the updated environment list. Free it using GLib.strfreev.
     */
    public static environ_setenv(envp, variable, value, overwrite)
    {
    }

    /**
     * Removes the environment variable variable from the provided environment envp.
     * @param {string} envp An environment list that can be freed using GLib.strfreev (e.g., as returned from GLib.get_environ), or null for an empty environment list
     * @param {string} variable The environment variable to remove, must not contain '='
     * @return {string} the updated environment list. Free it using GLib.strfreev.
     */
    public static environ_unsetenv(envp, variable)
    {
    }

    /**
     * Reads an entire file into a string, with good error checking.
     * @rating 9/10
     * @param {string} filename
     * @return {array} [0]={bool} success. [1]={file contents if successful}
     */
    public static file_get_contents(filename)
    {
    }

    /**
     * Opens a file for writing in the preferred directory for temporary files (as returned by GLib.get_tmp_dir).
     * @see https://people.gnome.org/~gcampagna/docs/GLib-2.0/GLib.file_open_tmp.html
     * @param {string} tmpl should be a string in the GLib file name encoding containing a sequence of six 'X' characters
     * @return {array} [{int} fileHandle, {string} name_used] [file handle | -1, location to store actual name used, or null
     */
    public static file_open_tmp(tmpl)
    {
    }

    /**
     * Reads the contents of the symbolic link filename like the POSIX readlink() function.
     * The returned string is in the encoding used for filenames. Use GLib.filename_to_utf8 to convert it to UTF-8.
     * @see https://people.gnome.org/~gcampagna/docs/GLib-2.0/GLib.file_read_link.html
     * @param {string} filename The symbolic link
     * @return {string} A newly-allocated string with the contents of the symbolic link, or null if an error occurred.
     */
    public static file_read_link(filename)
    {
    }

    /**
     * Writes all of contents to a file named filename, with good error checking.
     * If a file called filename already exists it will be overwritten.
     * @see https://people.gnome.org/~gcampagna/docs/GLib-2.0/GLib.file_set_contents.html
     * @param filename Name of a file to write contents to, in the GLib file name encoding
     * @param {string} contents String to write to the file
     * @return {boolean} true on success, false if an error occurred
     */
    public static file_set_contents(filename, contents)
    {
    }

    /**
     * Returns true if any of the tests in the bitfield test are true.
     * For example, `(G_FILE_TEST_EXISTS | G_FILE_TEST_IS_DIR)` will return true if the file exists;
     * the check whether it's a directory doesn't matter since the existence test is true.
     * With the current set of available tests, there's no point passing in more than one test at a time.
     * @see https://code.woboq.org/qt5/include/glib-2.0/glib/gfileutils.h.html;
     * @param {string} filename
     * @param {GLib.FileTest} test
     * @return {boolean}
     */
    public static file_test(filename, test)
    {
    }

    public static FileTest =
        {
            IS_REGULAR: 1,
            IS_SYMLINK: 2,
            IS_DIR: 4,
            IS_EXECUTABLE: 8,
            EXISTS: 16
        };

    /**
     * Converts an escaped ASCII-encoded URI to a local filename in the encoding used for filenames.
     * @see https://people.gnome.org/~gcampagna/docs/GLib-2.0/GLib.filename_from_uri.html
     * @param {string} uri A uri describing a filename (escaped, encoded in ASCII).
     * @return {array} [return_value: String, hostname: String]
     */
    public static filename_from_uri(uri)
    {
    }

    /**
     * Converts an absolute filename to an escaped ASCII-encoded URI,
     * with the path component following Section 3.3. of RFC 2396.
     * @see https://people.gnome.org/~gcampagna/docs/GLib-2.0/GLib.filename_to_uri.html
     * @param {string} filename An absolute filename specified in the GLib file name encoding.
     * @param {string} hostname A UTF-8 encoded hostname, or null for none.
     * @return {string} A newly-allocated string holding the resulting URI, or null on an error.
     */
    public static filename_to_uri(filename, hostname)
    {
    }

    /**
     * Locates the first executable named program in the user's path, in the same way that execvp() would locate it.
     * @see https://people.gnome.org/~gcampagna/docs/GLib-2.0/GLib.find_program_in_path.html
     * @rating 9/10 Use this to determine if a Linux application has been installed or not without throwing exceptions.
     * @param program
     * @return string with the absolute path name, or "" if the program is not found in the path. If program is already an absolute path, returns a copy of program if program exists and is executable, and "" otherwise.
     * @example: GLib.find_program_in_path('grep') // output: '/bin/grep'
     */
    public static find_program_in_path(program)
    {
    }

    /**
     * Gets the current directory.
     * @see https://people.gnome.org/~gcampagna/docs/GLib-2.0/GLib.get_current_dir.html
     * @return {string} The current directory
     */
    public static get_current_dir()
    {
    }

    /**
     * Gets the list of environment variables for the current process.
     * The list is null terminated and each item in the list is of the form 'NAME=VALUE'.
     * @see https://people.gnome.org/~gcampagna/docs/GLib-2.0/GLib.get_environ.html
     * @return {string} The list of environment variables
     */
    public static get_environ()
    {
    }

    /**
     * Queries the system monotonic time.
     * The monotonic clock will always increase and doesn't suffer discontinuities when the user (or NTP) changes the system time.
     * It may or may not continue to tick during times where the machine is suspended.
     * We try to use the clock that corresponds as closely as possible to the passage of time as measured by
     * system calls such as poll() but it may not always be possible to do this.
     */
    public static get_monotonic_time()
    {
    }

    /**
     * Queries the system wall-clock time.
     * This call is functionally equivalent to GLib.get_current_time except that the return value is often more
     * convenient than dealing with a GLib.TimeVal. You should only use this call if you are actually interested in the
     * real wall-clock time. GLib.get_monotonic_time is probably more useful for measuring intervals.
     * @return {int}
     */
    public static get_real_time(){}

    /**
     * Returns an ordered list of base directories in which to access system-wide configuration information.
     * @see https://people.gnome.org/~gcampagna/docs/GLib-2.0/GLib.get_system_config_dirs.html
     * @return {array<string>} A null-terminated array of strings owned by GLib that must not be modified or freed.
     */
    public static get_system_config_dirs()
    {
    }

    /**
     * Returns an ordered list of base directories in which to access system-wide application data.
     * @see https://people.gnome.org/~gcampagna/docs/GLib-2.0/GLib.get_system_data_dirs.html
     * @return {array<string>} A null-terminated array of strings owned by GLib that must not be modified or freed.
     */
    public static get_system_data_dirs()
    {
    }

    /**
     * Gets the directory to use for temporary files.
     * @see https://people.gnome.org/~gcampagna/docs/GLib-2.0/GLib.get_tmp_dir.html
     * @return {string} The directory to use for temporary files.
     */
    public static get_tmp_dir()
    {
    }

    /**
     * Returns a base directory in which to store user-specific application configuration information such as user preferences and settings.
     * @rating 8/10
     * @return {string}
     */
    public static get_user_config_dir()
    {
    }

    /**
     * Gets the user name of the current user. The encoding of the returned string is system-defined.
     * On UNIX, it might be the preferred file name encoding, or something else, and there is no guarantee that it is
     * even consistent on a machine.
     * @return {string}
     */
    public static get_user_name(){}

    /**
     *
     * @param {GLib.UserDirectory} directory
     * @return {string}
     */
    public static get_user_special_dir(directory){}

    /**
     * Returns the value of an environment variable.
     * @see https://people.gnome.org/~gcampagna/docs/GLib-2.0/GLib.getenv.html
     * @param {string} variable The environment variable to get, in the GLib file name encoding
     * @return {string} The value of the environment variable, or null if the environment variable is not found.
     */
    public static getenv(variable)
    {
    }

    /**
     * @return {array<string>}
     */
    public static get_language_names()
    {
    }

    /**
     * Gets the names of all variables set in the environment.
     * @see https://people.gnome.org/~gcampagna/docs/GLib-2.0/GLib.listenv.html
     * @return {array<string>} A null-terminated list of strings which must be freed with GLib.strfreev.
     */
    public static listenv(){}

    /**
     * Returns true if the given file_name is an absolute file name.
     * On POSIX systems, an absolute file name is well-defined. It always starts from the single root directory.
     * For example "/usr/local".
     * This function interprets as an absolute file name one that either begins with a directory separator such as
     * "\Users\tml" or begins with the root on a drive, for example "C:\Windows". The first case also includes UNC paths
     * such as "\\myserver\docs\foo". In all cases, either slashes or backslashes are accepted.
     * @param {string} file_name A file name
     * @return {boolean} true if file_name is absolute
     */
    public static path_is_absolute(file_name){}

    /**
     * Parses a command line into an argument vector, in much the same way the shell would,
     * but without many of the expansions the shell would perform
     * (variable expansion, globs, operators, filename expansion, etc. are not supported).
     * The results are defined to be the same as those you would get from a UNIX98 /bin/sh,
     * as long as the input contains none of the unsupported shell expansions.
     * If the input does contain such expansions, they are passed through literally.
     * Possible errors are those from the #G_SHELL_ERROR domain.
     * Free the returned vector with GLib.strfreev.
     * @param {string} command_line
     * @return {array} [success: bool, argv: return location for array of args]
     */
    public static shell_parse_argv(command_line){}

    /**
     * Quotes a string so that the shell (/bin/sh) will interpret the quoted string to mean unquoted_string.
     * If you pass a filename to the shell, for example, you should first quote it with this function. The return value
     * must be freed with GLib.free. The quoting style used is undefined (single or double quotes may be used).
     * @param {string} unquoted_string A literal string
     * @return {string} Quoted string
     */
    public static shell_quote(unquoted_string){}

    /**
     * See GLib.spawn_async_with_pipes for a full description; this function simply calls the
     * GLib.spawn_async_with_pipes without any pipes. You should call GLib.spawn_close_pid on the returned child process
     * reference when you don't need it any more. If you are writing a GTK+ application, and the program you are
     * spawning is a graphical application, too, then you may want to use gdk_spawn_on_screen() instead to ensure that
     * the spawned program opens its windows on the right screen.
     * @param {string|null} working_directory child's current working directory, or null to inherit parent's
     * @param {array<string>} argv child's argument vector
     * @param {array<string>|null} envp child's environment, or null to inherit parent's
     * @param {SpawnFlags} flags flags from GLib.SpawnFlags
     * @param {function|null} child_setup function to run in the child just before exec()
     * @return {array} [ok: Boolean, child_pid: GLib.Pid]
     */
    public static spawn_async(working_directory, argv, envp, flags, child_setup){}

    /**
     *
     * @param {string} working_directory
     * @param {array<string>} argv
     * @param {array<string>} envp
     * @param {SpawnFlags} flags
     * @param {function} child_setup
     * @return {array} [ok: Boolean, child_pid: GLib.Pid, standard_input: int, standard_output: int, standard_error: gint]
     */
    public static spawn_async_with_pipes(working_directory, argv, envp, flags, child_setup){}

    /**
     * A simple version of GLib.spawn_async that parses a command line with GLib.shell_parse_argv and passes it to
     * GLib.spawn_async. Runs a command line in the background. Unlike GLib.spawn_async, the
     * GLib.SpawnFlags.search_path flag is enabled, other flags are not. Note that GLib.SpawnFlags.search_path can have
     * security implications, so consider using GLib.spawn_async directly if appropriate.
     * Possible errors are those from GLib.shell_parse_argv and GLib.spawn_async.
     * @param {string} command_line A command line
     * @return {boolean} true on success, false if error is set
     */
    public static spawn_command_line_async(command_line){}

    /**
     * A simple version of GLib.spawn_sync with little-used parameters removed,
     * taking a command line instead of an argument vector.
     * See GLib.spawn_sync for full details. command_line will be parsed by GLib.shell_parse_argv.
     * Unlike GLib.spawn_sync, the GLib.SpawnFlags.search_path flag is enabled.
     * Note that GLib.SpawnFlags.search_path can have security implications,
     * so consider using GLib.spawn_sync directly if appropriate.
     * Possible errors are those from GLib.spawn_sync and those from GLib.shell_parse_argv.
     * @param {string} command_line A command line
     * @return {array} [ok: Boolean, standard_output: ByteArray, standard_error: ByteArray, exit_status: int]
     */
    public static spawn_command_line_sync(command_line){}

    /**
     * On some platforms, notably Windows, the GLib.Pid type represents a resource which must be closed to prevent
     * resource leaking. GLib.spawn_close_pid is provided for this purpose. It should be used on all platforms,
     * even though it doesn't do anything under UNIX.
     * @param {number} pid
     */
    public static spawn_close_pid(pid){}

    /**
     * Executes a child synchronously (waits for the child to exit before returning).
     * All output from the child is stored in standard_output and standard_error, if those parameters are non-null.
     * Note that you must set the GLib.SpawnFlags.stdout_to_dev_null and GLib.SpawnFlags.stderr_to_dev_null flags
     * when passing null for standard_output and standard_error.
     * @param {string|null} working_directory , or null to inherit parent's
     * @param {array<string>} argv child's argument vector
     * @param {array<string>|null} envp child's environment, or null to inherit parent's
     * @param {GLib.SpawnFlags} flags flags from GLib.SpawnFlags (typically SEARCH_PATH)
     * @param {function|null} child_setup Function to run in the child just before exec() or null to not.
     * @return {array} [ok: Boolean, standard_output: ByteArray, standard_error: ByteArray, exit_status: int]
     */
    public static spawn_sync(working_directory, argv, envp, flags, child_setup){}

    /**
     * Use this macro as the return value of a GLib.SourceFunc to remove the GLib.Source from the main loop.
     * @see https://people.gnome.org/~gcampagna/docs/GLib-2.0/GLib.SOURCE_REMOVE.html
     * @param {function} sourceFunc
     */
    public static source_remove(sourceFunc){}

    /**
     * Sets a function to be called at regular intervals, with priority. The function is called repeatedly until it
     * returns false, at which point the timeout is automatically destroyed and the function will not be called again.
     * Unlike GLib.timeout_add, this function operates at whole second granularity. The initial starting point of the
     * timer is determined by the implementation and the implementation is expected to group multiple timers together so
     * that they fire all at the same time. To allow this grouping, the interval to the first timer is rounded and can
     * deviate up to one second from the specified interval. Subsequent timer iterations will generally run at the
     * specified interval.
     * Note that timeout functions may be delayed, due to the processing of other event sources. Thus they should not be
     * relied on for precise timing. After each call to the timeout function, the time of the next timeout is
     * recalculated based on the current time and the given interval. If you want timing more precise than whole
     * seconds, use GLib.timeout_add instead.
     * The grouping of timers to fire at the same time results in a more power and CPU efficient behavior so if your
     * timer is in multiples of seconds and you don't require the first timer exactly one second from now, the use of
     * GLib.timeout_add_seconds is preferred over GLib.timeout_add.
     * This internally creates a main loop source using GLib.timeout_source_new_seconds and attaches it to the main loop
     * context using GLib.Source.prototype.attach. You can do these steps manually if you need greater control.
     * The interval given is in terms of monotonic time, not wall clock time. See GLib.get_monotonic_time.
     * @param {int} priority the priority of the timeout source. Typically this will be in the range between #G_PRIORITY_DEFAULT and #G_PRIORITY_HIGH.
     * @param {int} interval the time between calls to the function, in seconds
     * @param {function} source_function function to call
     * @return {int} the ID (greater than 0) of the event source.
     */
    public static timeout_add_seconds(priority, interval, source_function){}

    /**
     * Gets the current user's home directory.
     * @see https://people.gnome.org/~gcampagna/docs/GLib-2.0/GLib.get_home_dir.html
     * @return {string} The current user's home directory
     */
    public static get_home_dir(){}

    /////////////
    // CONSTANTS
    /////////////
    public static PRIORITY_DEFAULT = 0;
    public static PRIORITY_DEFAULT_IDLE = 200;
    public static PRIORITY_HIGH = -100;
    public static PRIORITY_HIGH_IDLE = 100;
    public static PRIORITY_LOW = 300;

    public static KeyFileFlags =
    {
        NONE: 0,
        KEEP_COMMENTS: 1,
        KEEP_TRANSLATIONS: 2
    };

    public static SpawnFlags =
    {
        CHILD_INHERITS_STDIN: 32,
        DO_NOT_REAP_CHILD: 2,
        FILE_AND_ARGV_ZERO: 64,
        LEAVE_DESCRIPTORS_OPEN: 1,
        SEARCH_PATH: 4,
        STDERR_TO_DEV_NULL: 16,
        STDOUT_TO_DEV_NULL: 8
    };

    public static UserDirectory =
    {
        DIRECTORY_DESKTOP: 0, // the user’s Desktop directory
        DIRECTORY_DOCUMENTS: 1, // the user’s Documents directory
        DIRECTORY_DOWNLOAD: 2, // the user’s Downloads directory
        DIRECTORY_MUSIC: 3, // the user’s Music directory
        DIRECTORY_PICTURES: 4, // the user’s Pictures directory
        DIRECTORY_PUBLIC_SHARE: 5, // the user’s shared directory
        DIRECTORY_TEMPLATES: 6, // the user’s Templates directory
        DIRECTORY_VIDEOS: 7, // the user’s Movies directory
        N_DIRECTORIES: 8  // the number of enum values
    };

    ///////////
    // CLASSES
    ///////////
    public static IOChannel =
    {
        /**
         * Creates a new GLib.IOChannel given a file descriptor. On UNIX systems this works for plain files, pipes, and
         * sockets.
         * The returned GLib.IOChannel has a reference count of 1.
         * The default encoding for GLib.IOChannel is UTF-8. If your application is reading output from a command using
         * via pipe, you may need to set the encoding to the encoding of the current locale (see GLib.get_charset) with
         * the GLib.IOChannel.prototype.set_encoding function.
         * If you want to read raw binary data without interpretation, then call the
         * GLib.IOChannel.prototype.set_encoding function with null for the encoding argument.
         * @param {int} fd a file descriptor.
         * @return {self} a new GLib.IOChannel.
         */
        unix_new(fd){}
    };

    public static KeyFile =
    {
        /**
         * Creates a new empty GLib.KeyFile object. Use GLib.KeyFile.prototype.load_from_file,
         * GLib.KeyFile.prototype.load_from_data, GLib.KeyFile.prototype.load_from_dirs or
         * GLib.KeyFile.prototype.load_from_data_dirs to read an existing key file.
         * @return {self}
         */
        constructor(){},

        /**
         * Creates a new empty GLib.KeyFile object. Use GLib.KeyFile.prototype.load_from_file,
         * GLib.KeyFile.prototype.load_from_data, GLib.KeyFile.prototype.load_from_dirs or
         * GLib.KeyFile.prototype.load_from_data_dirs to read an existing key file.
         * @return {self}
         */
        new(){},

        /**
         * Loads a key file into an empty GLib.KeyFile structure. If the file could not be loaded then @error is set to
         * either a GLib.FileError or GLib.KeyFileError.
         * @param {string} file The path of a filename to load, in the GLib filename encoding
         * @param {GLib.KeyFileFlags} flags flags from GLib.KeyFileFlags
         * @return {boolean} true if a key file could be loaded, false otherwise
         */
        load_from_file(file, flags){},
    };

    public static TimeZone =
    {
        /**
         * Creates a GLib.TimeZone corresponding to identifier.
         * identifier can either be an RFC3339/ISO 8601 time offset or something that would pass as a valid value for the
         * `TZ` environment variable (including null).
         * In UNIX, the `TZ` environment variable typically corresponds to the name of a file in the zoneinfo database, or
         * string in "std offset [dst [offset],start[/time],end[/time]]" (POSIX) format. There are no spaces in the
         * specification. The name of standard and daylight savings time zone must be three or more alphabetic characters.
         * Offsets are time values to be added to local time to get Coordinated Universal Time (UTC) and should be
         * `"[±]hh[[:]mm[:ss]]"`. Dates are either `"Jn"` (Julian day with n between 1 and 365, leap years not counted),
         * `"n"` (zero-based Julian day with n between 0 and 365) or `"Mm.w.d"` (day d (0 <= d <= 6) of week w (1 <= w <= 5)
         * of month m (1 <= m <= 12), day 0 is a Sunday). Times are in local wall clock time, the default is 02:00:00.
         * @param {string} identifier
         * @return {self}
         */
        constructor(identifier){},

        /**
         * Creates a GLib.TimeZone corresponding to identifier.
         * identifier can either be an RFC3339/ISO 8601 time offset or something that would pass as a valid value for the
         * `TZ` environment variable (including null).
         * In UNIX, the `TZ` environment variable typically corresponds to the name of a file in the zoneinfo database, or
         * string in "std offset [dst [offset],start[/time],end[/time]]" (POSIX) format. There are no spaces in the
         * specification. The name of standard and daylight savings time zone must be three or more alphabetic characters.
         * Offsets are time values to be added to local time to get Coordinated Universal Time (UTC) and should be
         * `"[±]hh[[:]mm[:ss]]"`. Dates are either `"Jn"` (Julian day with n between 1 and 365, leap years not counted),
         * `"n"` (zero-based Julian day with n between 0 and 365) or `"Mm.w.d"` (day d (0 <= d <= 6) of week w (1 <= w <= 5)
         * of month m (1 <= m <= 12), day 0 is a Sunday). Times are in local wall clock time, the default is 02:00:00.
         * @param {string} identifier
         * @return {self}
         */
        new(identifier) {}
    };

    public static DateTime =
    {
        /**
         * Creates a new GLib.DateTime corresponding to the given date and time in the time zone tz.
         * The year must be between 1 and 9999, month between 1 and 12 and day between 1 and 28, 29, 30 or 31 depending on the month and the year.
         * hour must be between 0 and 23 and minute must be between 0 and 59.
         * seconds must be at least 0.0 and must be strictly less than 60.0. It will be rounded down to the nearest microsecond.
         * If the given time is not representable in the given time zone (for example, 02:30 on March 14th 2010 in Toronto, due to daylight savings time) then the time will be rounded up to the nearest existing time (in this case, 03:00). If this matters to you then you should verify the return value for containing the same as the numbers you gave.
         * In the case that the given time is ambiguous in the given time zone (for example, 01:30 on November 7th 2010 in Toronto, due to daylight savings time) then the time falling within standard (ie: non-daylight) time is taken.
         * It not considered a programmer error for the values to this function to be out of range, but in the case that they are, the function will return null.
         * You should release the return value by calling GLib.DateTime.prototype.unref when you are done with it.
         * @param {TimeZone} [tz]
         * @param {int} [year]
         * @param {int} [month]
         * @param {int} [day]
         * @param {int} [hour]
         * @param {int} [minute]
         * @param {number} [seconds]
         * @return {DateTime}
         */
        constructor(tz, year, month, day, hour, minute, seconds){},

        /**
         * Creates a GLib.DateTime corresponding to this exact instant in the local time zone.
         * This is equivalent to calling GLib.DateTime.new_now with the time zone returned by GLib.TimeZone.new_local.
         * @return {DateTime|null}
         */
        new_now_local(){},

        /**
         *
         * @param {TimeVal} tv
         */
        new_from_timeval_local(tv){},

        /**
         * @param {TimeZone} tz
         */
        to_timezone(tz){},

        /**
         *
         * @param {int} t
         * @return {self}
         */
        new_from_unix_utc(t){}
    };

    public static TimeVal=
    {
        constructor(){}
    };

    public static Variant=
    {
        /**
         * Creates a new GLib.Variant according to the type provided, which must be a definite type.
         * If type is a fundamental numeric or string type, then value must be an appropriate JS primitive value.
         * If type is v, then value must be a GLib.Variant.
         * If type ia a maybe type, then value can be null or a value of the correct type.
         * If type is an array type, then value must be an array of appropriate values. As a special case,
         *      if type is ay, then a ByteArray can be used, which can avoid memory copies when not needed.
         * If type is a tuple, then value must be an array of appropriate values, whose length must be the number of
         *      elements in the tuple.
         * If type is a dictionary entry, then value must be a two elements array, where the two elements are the key
         *      and the value. As a special case, to obtain an array of dictionary entries (ie, a dictionary) you must
         *      not pass an array of two-element arrays but an object whose property names are the dictionary keys and
         *      whose property values are the dictionary values.
         * @param {string} type
         * @param {any} value
         * @return {self}
         */
        constructor(type, value){},

        /**
         * Creates a new GLib.Variant according to the type provided, which must be a definite type.
         * If type is a fundamental numeric or string type, then value must be an appropriate JS primitive value.
         * If type is v, then value must be a GLib.Variant.
         * If type ia a maybe type, then value can be null or a value of the correct type.
         * If type is an array type, then value must be an array of appropriate values. As a special case,
         *      if type is ay, then a ByteArray can be used, which can avoid memory copies when not needed.
         * If type is a tuple, then value must be an array of appropriate values, whose length must be the number of
         *      elements in the tuple.
         * If type is a dictionary entry, then value must be a two elements array, where the two elements are the key
         *      and the value. As a special case, to obtain an array of dictionary entries (ie, a dictionary) you must
         *      not pass an array of two-element arrays but an object whose property names are the dictionary keys and
         *      whose property values are the dictionary values.
         * @param {string} type
         * @param {any} value
         * @return {self}
         */
        new(type, value){}
    };
}
