package com.puti.pachong.parser;

import com.puti.pachong.entity.extract.ExtractPagination;
import com.puti.pachong.entity.extract.PaginationResult;

public abstract class ExtractResultParser {

    abstract PaginationResult parse(ExtractPagination pagination);
}
