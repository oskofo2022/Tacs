package domain.requests.gets.lists;

import com.fasterxml.jackson.annotation.JsonIgnore;
import constants.PaginationConstants;
import constants.RSQLConstants;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Objects;
import java.util.Optional;
import java.util.function.Function;

public abstract class RequestGetPagedList {
    public RequestGetPagedList() {
        this.page = PaginationConstants.Default.PAGE;
        this.pageSize = PaginationConstants.Default.PAGE_SIZE;
        this.queries = new ArrayList<>();
    }

    @Size(min = 1)
    private Integer page;

    @Size(min = 2, max = 1000)
    private Integer pageSize;

    @NotBlank
    private String sortBy;

    private SortOrder sortOrder;

    public int getPage() {
        return page;
    }

    @JsonIgnore
    private final ArrayList<String> queries;

    public void setPage(int page) {
        this.page = page;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public String getSortBy() {
        return sortBy;
    }

    public void setSortBy(String sortBy) {
        this.sortBy = sortBy;
    }

    public SortOrder getSortOrder() {
        return sortOrder;
    }

    public void setSortOrder(SortOrder sortOrder) {
        this.sortOrder = sortOrder;
    }


    @JsonIgnore
    public PageRequest getPageRequest() {
        return PageRequest.of(this.page - 1, this.pageSize, this.getSort());
    }

    @JsonIgnore
    private Sort getSort() {
        return Sort.by(this.sortOrder == SortOrder.ASCENDING ? Sort.Direction.ASC : Sort.Direction.DESC, this.sortBy);
    }

    @JsonIgnore
    public Optional<String> getFilter() {
        this.addQueries();
        return queries.stream()
                      .reduce(((concatenatedQueries, query) -> concatenatedQueries + RSQLConstants.AND + query));
    }

    protected void addQuery(String query, Object value) {
        this.addQuery(query, value, Objects::nonNull);
    }

    protected void addQuery(String query, String value) {
        this.addQuery(query, value, v -> value != null && !value.isBlank());
    }

    private <TObject> void addQuery(String query, TObject value, Function<TObject, Boolean> isValid) {
        if (isValid.apply(value)) {
            this.queries.add(query.formatted(value));
        }
    }

    protected void addQueries() {

    }
}
